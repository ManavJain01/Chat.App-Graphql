// auth.api.ts
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useAppDispatch } from '../store/store';
import { setTokens, setUser } from '../store/reducers/authReducer';

// Define your GraphQL mutations
const SIGN_UP = gql`
  mutation signUp($name: String!, $email: String!, $password: String!, $role: String!) {
    signUp(name: $name, email: $email, password: $password, role: $role) {
      user {
        _id
        name
        email
        role
      }
      accessToken
      refreshToken
    }
  }
`;

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  
  return useMutation(SIGN_UP, {
    onCompleted: (data) => {
      // Dispatch user and tokens to Redux store
      dispatch(setUser(data.signUp.user));
      dispatch(setTokens({
        accessToken: data.signUp.accessToken,
        refreshToken: data.signUp.refreshToken,
      }));
    },
  });
};

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        name
        email
        role
      }
      accessToken
      refreshToken
    }
  }
`;

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation(LOGIN, {
    onCompleted: (data) => {
      // Dispatch user and tokens to Redux store
      dispatch(setUser(data.login.user));
      dispatch(setTokens({
        accessToken: data.login.accessToken,
        refreshToken: data.login.refreshToken,
      }));
    },
  });
};

// Forgot Password Mutation
const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;

export const useForgotPassword = () => {
    return useMutation(FORGOT_PASSWORD);
};  

// Reset Password Mutation
const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword) {
      message
    }
  }
`;

export const useResetPassword = () => {
  return useMutation(RESET_PASSWORD);
};