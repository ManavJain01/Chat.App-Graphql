import { gql } from 'apollo-server-express';

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  extend type Query {
    getUser(id: ID!): User
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User
  }
`;
