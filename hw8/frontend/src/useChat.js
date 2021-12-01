import { useState } from "react";

const useChat = () => 
{
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    const sendMessage = (payload) => { sendData(["input", payload]); }
    return 
    {
        status,
        messages,
        sendMessage
    }
}

export default useChat;