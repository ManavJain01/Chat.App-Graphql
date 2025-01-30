import mongoose, { model } from "mongoose";
import { type IChat } from "./chat.dto";

const Schema = mongoose.Schema;

const ChatSchema = new Schema<IChat>({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, { timestamps: true });


// Exporting models
const Chat = model<IChat>("Chat", ChatSchema);

export { Chat };
