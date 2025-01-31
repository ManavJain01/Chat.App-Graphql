import authResolvers from "./authResolvers";
import userResolvers from "./userResolvers";

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
