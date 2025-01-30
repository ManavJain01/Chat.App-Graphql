import mongoose from "mongoose";
import { type BaseSchema } from "../common/dto/base.dto";

export interface IChat extends BaseSchema {
        participants: Array<mongoose.Schema.Types.ObjectId>;
        messages: Array<mongoose.Schema.Types.ObjectId>;
}
