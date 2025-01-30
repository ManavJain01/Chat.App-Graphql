import authResolvers from "./authResolvers";

const resolvers = {
  ...authResolvers,   // Spread auth resolvers
};

export default resolvers;