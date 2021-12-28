import { makeName, checkUser, newUser, checkChatBox, newChatBox, checkMessage, newMessage  } from "./utility";

const Mutation = {
    async createChatBox(parent, { name1, name2 }, { db, pubsub }, info) {
        console.log(`Creating chatbox for ${name1} and ${name2} `)
        if (!name1 || !name2)
            throw new Error("Missing chatBox name for createChatBox.");

        if (!(await checkUser(db, name1, "createChatBox"))) {
            console.log(`User does not exist for : ${name1}`);
            await newUser(db, name1);
        }

        if (!(await checkUser(db, name2, "createChatBox"))) {
            console.log(`User does not exist for : ${name2}`);
            await newUser(db, name2);
        }

        const chatBoxName = makeName(name1, name2);
        let chatBox = await checkChatBox(db, chatBoxName, "createChatBox");
        if (! chatBox)
            chatBox = await newChatBox(db, chatBoxName);

        return chatBox;
    },
    async createMessage (parent, { from, to, message }, { db, pubsub }, info)
    {
        console.log(from, to, message)
        const user = await checkUser(db, from);
        const msg = await newMessage(db, user, message);

        pubsub.publish(`MESSAGE CREATED ${from} ${to}`, 
        {
            message: { mutation: 'CREATED', message: msg },
        });
        return msg;
    },
    // TODO update chatBox when message is created
};

export default Mutation;