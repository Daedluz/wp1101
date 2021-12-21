import { useState, useRef, useEffect } from 'react';
import { Button, Input, message, Tag } from 'antd';
import useChat from '../Hooks/useChat';
import Wrapper from '../Components/Wrapper';
import ChatRoom from './chatRoom';
import SignIn from './signIn';

const LOCALSTORAGE_KEY = "save-username";

function App() {
  const saveUsername = localStorage.getItem(LOCALSTORAGE_KEY);

  const {status, messages, sendMessage, clearMessages} = useChat();
  const [username, setUsername] = useState(saveUsername || '');
  const [body, setBody] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (signedIn){
      localStorage.setItem(LOCALSTORAGE_KEY, username);
    }
  }, [signedIn, username])

  const displayStatus = (payload) =>
  {
    if (payload.msg)
    {
      const { type, msg } = payload;
      const content = 
      {
        content: msg,
        duration: 0.5
      }
      switch (type)
      {
        case 'success':
        {
          message.success(content);
          break;
        }
        case 'error':
        default:
        {
          message.error(content);
          break;
        }
      }
    }
  }

  useEffect ( () => 
  {
    displayStatus(status)
  }, [status] )

  return (
    <Wrapper>
      {
      signedIn ? 
      <ChatRoom
        messages = {messages}
        sendMessage = {sendMessage}
        clearMessages = {clearMessages}
        username = {username}
        setUsername = {setUsername}
        body = {body}
        setBody = {setBody}
        bodyRef = {bodyRef}
        displayStatus = {displayStatus}
      />
      :
      <SignIn
        me = {username}
        setMe = {setUsername}
        setSignedIn = {setSignedIn}
        displayStatus = {displayStatus}
      />

      }
    </Wrapper>
  )
}

export default App
