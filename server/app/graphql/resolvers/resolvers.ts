import authResolvers from "./authResolvers";
import userResolvers from "./userResolvers";

const resolvers = {
  ...authResolvers,   // Spread auth resolvers
  ...userResolvers,  // Spread user resolvers
};

export default resolvers;