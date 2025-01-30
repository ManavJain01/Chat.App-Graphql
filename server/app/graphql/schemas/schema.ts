import { mergeTypeDefs } from '@graphql-tools/merge';
import { userSchema } from './userSchema';
import authSchema from './authSchema';

const typeDefs = mergeTypeDefs([authSchema, userSchema]);

export default typeDefs;

