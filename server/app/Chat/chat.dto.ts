import mongoose from "mongoose";
import { type BaseSchema } from "../common/dto/base.dto";

export interface IChat extends BaseSchema {
        participants: mongoose.Types.ObjectId[];
        lastMessage?: mongoose.Types.ObjectId;
}
