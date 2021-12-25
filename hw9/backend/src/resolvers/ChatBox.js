const ChatBox = 
{
    messages(parent, args, { db }, info)
    {
        return Promise.all(
            parent.map( (mId) => db.MessageModel.findById(mId) )
        );
    }
};

export default ChatBox;