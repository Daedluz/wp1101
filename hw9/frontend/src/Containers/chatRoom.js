import { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CHATBOX_MUTATION, CREATE_MESSAGE_MUTATION } from '../graphql';
import { Button, Input, message, Tag, Tabs } from 'antd';
import styled from 'styled-components';
import Title from '../Components/Title';
import ChatBox from './ChatBox';
import ChatMoal from './ChatModal';
import useChatBox from '../Hooks/useChatBox';
import ChatModal from './ChatModal';

const Wrapper = styled(Tabs)`
    width: 100%;
    height: 300px;
    background: #eeeeee52;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    display: flex;
`;

const ChatRoom = ({me, displayStatus}) =>
{
    const [modalVisible, setModalVisible] = useState(false);
    const [messageInput, setMessageInput] = useState('');
    const [activeKey, setActiveKey] = useState('');


    const { chatBoxes, createChatBox, removeChatBox } = useChatBox();
    const [startChat] = useMutation(CREATE_CHATBOX_MUTATION);
    const [sendMessage] = useMutation(CREATE_MESSAGE_MUTATION);

    const addChatBox = () => 
    {
        setModalVisible(true);
        console.log(modalVisible)
    };

    useEffect(()=>{console.log(activeKey)}, [activeKey]);
    

    return (
        <>
            <Title>
                <h1>{me}'s Chat Room</h1>
                <Button type="primary" danger>
                {/* onClick={clearMessages} */}
                    Clear
                </Button>
            </Title>

            <Wrapper
                tabBarStyle={{ height: "36px" }}
                type='editable-card'
                activeKey={activeKey}
                onChange={(key) => { setActiveKey(key) }}
                onEdit={(targetKey, action) => 
                {
                    if (action === "add") addChatBox();
                    else if (action ==="remove")
                    {
                        setActiveKey(removeChatBox(targetKey, activeKey));
                    }
                }}>
                {chatBoxes.map((friend) => (
                    <Tabs.TabPane tab={friend}
                        closable={true}
                        key={friend}>
                        
                        <ChatBox me={me} friend={friend} key={friend} />

                    </Tabs.TabPane>
                ))}
            </Wrapper>

            <ChatModal
                visible={modalVisible}
                onCreate = {async (name) => 
                {
                    console.log(`Creating ChatBox for ${me} and ${name}`);
                    await startChat({variables: {name1: me, name2: name}});

                    setActiveKey(createChatBox(name));
                    setModalVisible(false);
                }}
                onCancel={() => {
                    setModalVisible(false);
                }}/>

            {/* <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: 10 }}
                onKeyDown={(e) => {
                if(e.key === 'Enter'){ bodyRef.current.focus() }
                }}
            ></Input> */}
            
            {/* ref = {bodyRef}
                value={body} */}
            <Input.Search
                onChange={(e) => setMessageInput(e.target.value)}
                enterButton="Send"
                placeholder="Type a message here..."
                onSearch={(msg) => {
                if (!msg)
                {
                    displayStatus({
                        type: "error",
                        msg: "Please enter message.",
                    });
                    return;
                }
                sendMessage({ variables: { from: me , to: activeKey , message: msg } })
                setMessageInput('')
                }}
            ></Input.Search>
        </>
    )
}

export default ChatRoom;