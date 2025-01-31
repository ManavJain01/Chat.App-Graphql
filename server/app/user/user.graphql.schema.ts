import { gql } from 'apollo-server-express';

export const userSchema = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    role: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, role: String!): User
    updateUser(id: ID!, name: String, email: String, role: String): User
    deleteUser(id: ID!): User
  }
`;
