import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ChatBoxSchema = new Schema({
    name: { type: String, required: true },
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});
const ChatBoxModel = mongoose.model('ChatBox', ChatBoxSchema);

const MessageSchema = new Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        body: {
            type: String,
            required: true,
        }
    }
);
const MessageModel = mongoose.model('Message', MessageSchema);

const UserSchema = new Schema({ name: { type: String, required: true } });
const UserModel = mongoose.model('User', UserSchema);

export { UserModel, MessageModel, ChatBoxModel };