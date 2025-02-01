import { IUser } from "./user.dto";
import * as userService from "./user.service"

const userResolvers = {
  Query: {
    users: async () => {      
      return await userService.getAllUser();
    },
    user: async (_: any, { id }: { id: string }) => {
      if (!id) {
        throw new Error("User ID is required");
      }
      
      const user = await userService.getUserById(id);
      if (!user) {
        throw new Error("User not found");
      }
      
      return user;
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, role }: { name: string; email: string; role: string }) => {
      return await userService.createUser({ name, email, role } as IUser);
    },
    updateUser: async (_: any, { id, name, email, role }: { id: string; name?: string; email?: string; role?: string }) => {
      return await userService.updateUser(id, { name, email, role } as IUser);
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      return await userService.deleteUser(id);
    },
  },
};

export default userResolvers;
