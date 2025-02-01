import authResolvers from "../Auth/auth.graphql.resolvers";
import chatResolvers from "../Chat/chat.graphql.resolvers";
import messageResolvers from "../Message/message.graphql.resolvers";
import userResolvers from "../user/user.graphql.resolvers";

const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...userResolvers.Query,
    ...messageResolvers.Query,
    ...chatResolvers.Query
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...userResolvers.Mutation,
    ...messageResolvers.Mutation,
    ...chatResolvers.Mutation
  },
};

export default resolvers;
