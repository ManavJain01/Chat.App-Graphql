import { User } from "../../user/user.schema";

const userResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, role }: { name: string; email: string; role: string }) => {
      const user = new User({ name, email, role });
      await user.save();
      return user;
    },
    updateUser: async (_: any, { id, name, email, role }: { id: string; name?: string; email?: string; role?: string }) => {
      return await User.findByIdAndUpdate(id, { name, email, role }, { new: true });
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

export default userResolvers;
