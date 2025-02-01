import { gql } from 'apollo-server-express';

export const chatSchema = gql`
  type Chat {
    _id: ID!
    participants: [ID!]!
    lastMessage: Message
  }

  type User {
    _id: ID!
    name: String!
  }

  type Query {
    getChatId(userId: ID!): ID!
    getFriends(userId: ID!): [User!]!
    getChats: [Chat!]!
  }

  type Mutation {
    createChat(participants: [ID!]!): Chat!
  }
`;
