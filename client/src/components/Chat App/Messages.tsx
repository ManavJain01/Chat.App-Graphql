import { useEffect, useState } from "react";
import { Box, TextField, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useAppSelector } from "../../store/store";
import { useCreateChat, useGetChatId } from "../../graphql/chat.graphql";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getChatMessages, useSendMessage } from "../../graphql/message.graphql";

const messagesData = [
  { id: 1, text: "Hey! How are you?", sender: "friend" },
  { id: 2, text: "I'm good, what about you?", sender: "me" },
  { id: 3, text: "I'm great too!", sender: "friend" },
];
const chatId = "679dacaf2f7636183f317a7a"

export default function Messages() {
  // useParams
  const { id: receiverId } = useParams();
  
  // useSelector
  const authData = useAppSelector((state) => state.auth);
  const senderId = authData.id;

  // API Calls
  const [ createChat ] =  useCreateChat();
  const [ sendMessage ] = useSendMessage();
  const { data: allChats } = getChatMessages(chatId);
  const { data: getchatId } = useGetChatId(senderId, receiverId as string);
console.log("getchatId: ", getchatId);

  // useState
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");

  // useEffect
  useEffect(() => {
    if (allChats?.getChatMessages) {
      setMessages(allChats?.getChatMessages);
    }
  }, [allChats]);

  // Functions

  /**
   * Handle sending a new message
   * @description Adds a new message to the messages state
   * @param {React.FormEvent<HTMLFormElement>} event Form event
   * @returns {void}
   */
  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newMessage.trim() || !senderId || !receiverId) return;
    
    if(chatId){
      await handleSendMessage();
    }else {
      // Create ChatId
      await createChatId();
  
    }
  }

  const handleSendMessage = async () => {
    try {
      // Send Message
      const { data } = await sendMessage({ variables: { chatId: chatId, sender: senderId, text: newMessage } });
      
      setMessages([
        ...messages,
        { id: Date.now(), text: newMessage, sender: senderId },
      ]);
      setNewMessage("");
    } catch (err: any) {
      toast.error(err);
    }
  };

  const createChatId = async () => {
    try {
      const { data } = await createChat({ variables: { participants: [senderId, receiverId] } });
      console.log("createChat:", data);
    } catch (err: any) {
      toast.error(err);
    }
  }

  return (
    <Stack
      direction="column"
      gap={5}
      justifyContent={"space-between"}
      height={"100%"}
    >
      {/* Messages */}
      <Box className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </Box>

      {/* Input Box */}
      <Stack direction="row" gap={2}>
        <TextField
          fullWidth
          placeholder="Type a message..."
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClick(e as unknown as React.FormEvent<HTMLFormElement>)}
        />
        <IconButton onClick={(e) => handleClick(e as unknown as React.FormEvent<HTMLFormElement>)} className="ml-2">
          <SendIcon color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
