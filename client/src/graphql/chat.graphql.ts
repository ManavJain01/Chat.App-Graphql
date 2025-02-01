// chat.api.ts
import { gql, useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

const GET_FRIENDS = gql`
  query getFriends($userId: ID!) {
    getFriends(userId: $userId) {
      _id
      name
    }
  }
`;

export const useGetFriends = (userId: String) => {
  return useQuery(GET_FRIENDS, { variables: { userId } });
};

const GET_CHATID = gql`
  query getChatId($userId: ID!) {
    getChatId(userId: $userId) {
      _id
    }
  }
`;

export const useGetChatId = (userId: String, friendId: String) => {  
  return useQuery(GET_CHATID, { variables: { userId } });
};

const CREATE_CHAT = gql`
  mutation createChat($participants: [ID!]!) {
    createChat(participants: $participants) {
      _id
    }
  }
`;

export const useCreateChat = () => {
  return useMutation(CREATE_CHAT);
};