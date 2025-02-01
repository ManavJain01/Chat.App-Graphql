import mongoose, { model } from "mongoose";
import { type IMessage } from "./message.dto";

const Schema = mongoose.Schema;

const MessageSchema = new Schema<IMessage>({
    chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
}, { timestamps: true });


// Exporting models
const Message = model<IMessage>("Message", MessageSchema);

export { Message };
