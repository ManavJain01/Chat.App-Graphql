import * as messageService from "./message.service";

// Resolvers
const messageResolvers = {
  Query: {
    getChatMessages: async (_: any, { chatId }: { chatId: string }) => {      
      const messages =  await messageService.getChatMessages(chatId);
      return messages;
    }
  },
  Mutation: {
    sendMessage: async (
      _: any,
      { chatId, sender, text }: { chatId: string; sender: string; text: string }
    ) => {
      return await messageService.sendMessage(chatId, sender, text);
    },
  },
};

export default messageResolvers;