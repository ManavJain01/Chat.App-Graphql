// user.api.ts
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $role: String!) {
    createUser(name: $name, email: $email, role: $role) {
      _id
      name
      email
      role
    }
  }
`;

export const useCreateUser = () => {
  return useMutation(CREATE_USER);
};

// Define your GraphQL queries and mutations
const GET_USERS = gql`
  query getUsers {
    users {
      _id
      name
      email
      role
    }
  }
`;

export const useGetUsers = () => {
    return useQuery(GET_USERS);
};

const GET_USER_BY_ID = gql`
  query user($id: String!) {
    user(id: "679c48a5174aefb555235d9c") {
      _id
      name
      email
      role
    }
  }
`;

export const useGetUserById = (id: string) => {
  console.log("in graphql:", id);
  
  return useQuery(GET_USER_BY_ID);
};

// Mutation to update an existing user
const UPDATE_USER = gql`
  mutation updateUser($id: String!, $name: String, $email: String, $role: String) {
    updateUser(id: $id, name: $name, email: $email, role: $role) {
      _id
      name
      email
      role
    }
  }
`;

export const useUpdateUser = () => {
    return useMutation(UPDATE_USER);
};

// Mutation to delete a user
const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      _id
      name
      email
    }
  }
`;

export const useDeleteUser = () => {
    return useMutation(DELETE_USER);
};