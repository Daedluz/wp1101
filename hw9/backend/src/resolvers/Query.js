import { makeName, checkUser, newUser, checkChatBox, newChatBox, checkMessage, newMessage  } from "./utility";

const Query = 
{
    async chatBox (parent, { name1, name2 }, { db, pubsub }, info)
    {
        const chatBoxName = makeName(name1, name2);
        console.log(`Looking for chatBox with name ${chatBoxName}`);
        let chatBox = await checkChatBox(db, chatBoxName, "queryChatBox");
        if (! chatBox)
        {
            console.log("chatBox not found, creating new chatbox");
            chatBox = await newChatBox(db, chatBoxName);
        }
        return chatBox;
    }
}

export default Query;