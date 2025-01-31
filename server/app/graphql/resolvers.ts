import authResolvers from "../Auth/auth.graphql.resolvers";
import userResolvers from "../user/user.graphql.resolvers";

const resolvers = {
  Query: {
    ...authResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};

export default resolvers;
