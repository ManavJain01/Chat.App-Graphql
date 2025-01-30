import { gql } from 'apollo-server-express';

const authSchema = gql`
  # User type to hold user-related data
  type User {
    _id: ID!
    name: String!
    email: String!
    role: String!
  }

  # AuthData type to hold authentication data (user + tokens)
  type AuthData {
    user: User!
    accessToken: String!
    refreshToken: String!
  }

  # Root query and mutations related to authentication
  type Mutation {
    # SignUp mutation to create a new user and return AuthData
    signUp(name: String!, email: String!, password: String!, role: String!): AuthData!

    # Login mutation to authenticate a user and return AuthData
    login(email: String!, password: String!): AuthData!
  }

  # Optional: You could also define Queries here, but for authentication, these are usually not necessary
   # Query type (Even if empty, it is required)
   type Query {
        _: String # Placeholder query to satisfy Apollo Server
    }
`;

export default authSchema;
