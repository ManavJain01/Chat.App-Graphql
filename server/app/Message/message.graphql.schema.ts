import { gql } from 'apollo-server-express';

export const messageSchema = gql`
  type Message {
    _id: ID!
    chatId: ID!
    sender: ID!
    text: String!
    timestamp: String!
  }

  type Query {
    getChatMessages(chatId: ID!): [Message!]!
  }

  type Mutation {
    sendMessage(chatId: ID!, sender: ID!, text: String!): Message!
  }
`;
