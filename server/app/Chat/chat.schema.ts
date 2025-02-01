import mongoose, { model } from "mongoose";
import { type IChat } from "./chat.dto";

const Schema = mongoose.Schema;

const ChatSchema = new Schema<IChat>({
    participants: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
}, { timestamps: true });


// Exporting models
const Chat = model<IChat>("Chat", ChatSchema);

export { Chat };
