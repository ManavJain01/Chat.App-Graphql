import { mergeTypeDefs } from '@graphql-tools/merge';
import { userSchema } from '../user/user.graphql.schema';
import authSchema from '../Auth/auth.graphql.schema';
import { messageSchema } from '../Message/message.graphql.schema';
import { chatSchema } from '../Chat/chat.graphql.schema';

const typeDefs = mergeTypeDefs([authSchema, userSchema, messageSchema, chatSchema]);

export default typeDefs;

