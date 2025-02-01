import { User } from "../user/user.schema";
import { Chat } from "./chat.schema";

export const getFriends = async (userId: string) => {      
  return await User.find({ _id: { $ne: userId } });
};

export const createChat = async (participants: string[]) => {      
  const chat = new Chat({ participants });
  await chat.save();
  return chat;
};

export const getChats = async () => {      
  return await Chat.find().populate("lastMessage");
};

export const getChatId = async (userId: string, friendId: string) => {
  const chat = await Chat.findOne({ participants: { $all: [userId, friendId] } });

  return chat ? chat._id : null;
};