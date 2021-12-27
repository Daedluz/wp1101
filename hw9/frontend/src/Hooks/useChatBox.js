import { useState } from "react"

const useChatBox = () => 
{
    const [chatBoxes, setChatBoxes] = useState([]);
    const createChatBox = (friend) => 
    {
        setChatBoxes([...chatBoxes, friend]);
    }
    const removeChatBox = (targetKey, activeKey) => 
    {

    }

    return { chatBoxes, createChatBox, removeChatBox };
}

export default useChatBox;