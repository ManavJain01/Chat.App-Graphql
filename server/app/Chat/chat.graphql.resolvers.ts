import * as chatService from "./chat.service"

const chatResolvers = {
  Query: {
    getFriends: async (_: any, { userId }: { userId: string }) => {
      return await chatService.getFriends(userId);
    },
    getChatId: async (_: any, { userId }: { userId: string }) => {
      console.log("hi: ", userId);
      return "35457";
      
      // return await chatService.getChatId(userId, friendId);
    },
    getChats: async () => {
      return await chatService.getChats();
    },
  },
  Mutation: {
    createChat: async (_: any, { participants }: { participants: string[] }) => {
      return await chatService.createChat(participants);
    },
  }
};

export default chatResolvers;