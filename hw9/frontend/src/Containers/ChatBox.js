import { useEffect, useRef, useState } from 'react';
import Message from '../Components/Message';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { CHATBOX_QUERY, MESSAGE_SUBSCRIPTION } from '../graphql';
import { Tag } from 'antd';

const Messages = styled.div`
    height: calc(240px - 36px);
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const ChatBox = ({ me, friend, ...props }) => 
{
    const messagesFooter = useRef(null);

    const { data, loading, subscribeToMore } = useQuery(CHATBOX_QUERY, {
        variables: { name1: me, name2: friend },
    });

    const [messages, setMessages] = useState([]);
    const [init, setInit] = useState(false);

    const scrollToBottom = () => {
        messagesFooter.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        if (!loading && data && !init)
        {
            console.log("Initializing...");
            setMessages(data.chatBox.messages);
            setInit(true);
        }
    }, [loading])

    useEffect(() => {
        scrollToBottom();
        console.log("Messages in useEffect: ", messages);
        // if (data && messages.length === 0)
        //     setMessages(data.chatBox.messages);
    }, [messages]);

    useEffect(() => 
    {
        try 
        {
            subscribeToMore({
                document: MESSAGE_SUBSCRIPTION,
                variables: { from: me, to: friend },
                updateQuery: (prev, { subscriptionData }) => 
                {
                    if (!subscriptionData.data ) return prev;
                    const newMessage = subscriptionData.data.message.message;
                    
                    console.log("New message ", newMessage);
                    setMessages( (prevMessages) => ([...prevMessages, newMessage]) );

                    return {
                        // chatBox: {
                            // id: prev.chatBox.id,
                            // name: prev.chatBox.name,
                            ...prev,
                            messages: [... prev.chatBox.messages, newMessage],
                        // }
                    };
                },
            });
        }
        catch(e) { console.log(e) };
    }, [subscribeToMore]);

    if (loading) return (<p> loading </p>);

    // {messages.length === 0 ? 
    //     (<p style={{ color: '#ccc' }}>
    //       No messages...
    //     </p>) : 
    //     (messages.map(({name, body}, i) => 
    //       <p className="App-message" key = {i}>
    //         <Tag color="blue">{name}</Tag> {body}
    //       </p>
    //     ))}

    return (
        <Messages>
            {
                messages.length === 0 ? 
                (<p style={{ color: '#ccc' }}>
                No messages...
                </p>) : 
                messages.map(({ sender: { name: name}, body }, i) => {
                    // <Message me={me} name={name} body={body} key={name + body + i} />
                    // console.log(name, body, i);
                    return (<p className="App-message" key = {i}>
                        <Tag color="blue">{name}</Tag> {body}
                    </p>);
                })
            }
            <div ref={messagesFooter}/>
        </Messages>
    );

};



export default ChatBox;