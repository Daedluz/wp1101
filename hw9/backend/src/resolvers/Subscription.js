import { makeName, checkChatBox } from './utility';

const Subscription = 
{
    message: 
    {
        subscribe(parent, { from, to }, { db, pubsub }, info)
        {
            const chatBoxName = makeName(from, to);
            const chatBox = checkChatBox(db, chatBoxName);

            if (!chatBox)
            {
                throw new Error('ChatBox not found.');
            }

            return pubsub.asyncIterator(`MESSAGE CREATED ${from} ${to}`);
        },
    },
};

export default Subscription;