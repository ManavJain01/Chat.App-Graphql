import { type BaseSchema } from "../common/dto/base.dto";

export interface IMessage extends BaseSchema {
    sender_id: object;
    receiver_id: object;
    message: string;
}