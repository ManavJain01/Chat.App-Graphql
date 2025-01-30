import mongoose, { model } from "mongoose";
import { type IMessage } from "./message.dto";

const Schema = mongoose.Schema;

const MessageSchema = new Schema<IMessage>({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
    },
}, { timestamps: true });


// Exporting models
const Message = model<IMessage>("Message", MessageSchema);

export { Message };
