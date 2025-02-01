import { Chat } from "../Chat/chat.schema";
import { Message } from "./message.schema";

export const sendMessage = async (chatId: string, sender: string, text: string) => {      
  const message = new Message({ chatId, sender, text });
  await message.save();

  await Chat.findByIdAndUpdate(chatId, { lastMessage: message._id });
  
  return message;
};

export const getChatMessages = async (chatId: string) => {
  return await Message.find({ chatId }).sort({ timestamp: 1 });  
};