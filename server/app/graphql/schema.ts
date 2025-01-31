import { mergeTypeDefs } from '@graphql-tools/merge';
import { userSchema } from '../user/user.graphql.schema';
import authSchema from '../Auth/auth.graphql.schema';

const typeDefs = mergeTypeDefs([authSchema, userSchema]);

export default typeDefs;

