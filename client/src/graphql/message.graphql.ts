import { gql, useMutation, useQuery } from "@apollo/client";

const SEND_MESSAGE = gql`
  mutation sendMessage($chatId: ID!, $sender: ID!, $text: String!) {
    sendMessage(chatId: $chatId, sender: $sender, text: $text) {
      _id
      text
    }
  }
`;

export const useSendMessage = () => {
  return useMutation(SEND_MESSAGE);
};

const GET_MESSAGES = gql`
  query getChatMessages($chatId: ID!) {
    getChatMessages(chatId: $chatId) {
      _id
      sender
      text
      timestamp
    }
  }
`;

export const getChatMessages = (chatId: String) => {
  return useQuery(GET_MESSAGES, { variables: { chatId } });
};