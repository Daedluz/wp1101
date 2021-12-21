import { useState, useRef, useEffect } from 'react';
import { Button, Input, message, Tag } from 'antd';
import useChat from '../Hooks/useChat';
import Title from '../Components/Title';
import Message from '../Components/Message';

const ChatRoom = ({messages, sendMessage, clearMessages, username, setUsername, bodyRef, body, setBody, displayStatus}) =>
{
    return (
        <>
          <Title>
            <h1>Simple Chat</h1>
            <Button type="primary" danger onClick={clearMessages}>
              Clear
            </Button>
          </Title>
          <Message>
            {messages.length === 0 ? 
            (<p style={{ color: '#ccc' }}>
              No messages...
            </p>) : 
            (messages.map(({name, body}, i) => 
              <p className="App-message" key = {i}>
                <Tag color="blue">{name}</Tag> {body}
              </p>
            ))}
          </Message>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 10 }}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){ bodyRef.current.focus() }
            }}
          ></Input>
          <Input.Search
            ref = {bodyRef}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            enterButton="Send"
            placeholder="Type a message here..."
            onSearch={(msg) => {
              if (!msg || !username)
              {
                displayStatus({
    
                })
              }
              sendMessage({name: username, body: msg})
              setBody('')
            }}
          ></Input.Search>
        </>
      )
}

export default ChatRoom;