import { useState } from "react"

const useChatBox = () => 
{
    const [chatBoxes, setChatBoxes] = useState([]);
    const createChatBox = (friend) => 
    {
        setChatBoxes([...chatBoxes, friend]);
        return friend;
    }
    const removeChatBox = (targetKey, activeKey) => 
    {
        setChatBoxes(chatBoxes.filter((value) => value !== targetKey));
        return chatBoxes[0];
    }

    return { chatBoxes, createChatBox, removeChatBox };
}

export default useChatBox;