import { IUser } from "../../user/user.dto";
import * as authService from "../../auth/auth.service";

const authResolvers = {
    Mutation: {
      // Sign up mutation
        signUp: async (_: unknown, { name, email, password, role }: IUser) => {
          return await authService.signupUser({ name, email, password, role } as IUser)
        },

        // Login mutation
        login: async (_: unknown, { email, password }: {email: string; password: string}) => {
          return await authService.loginUser({ email, password } as IUser)
        }
    },
};
  
export default authResolvers;
  