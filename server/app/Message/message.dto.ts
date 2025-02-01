import mongoose from "mongoose";
import { type BaseSchema } from "../common/dto/base.dto";

export interface IMessage extends BaseSchema {
    chatId: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
    text: string;
    timestamp: Date;
}