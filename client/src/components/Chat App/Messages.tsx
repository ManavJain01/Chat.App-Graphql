import { useEffect, useState } from "react";
import { Box, TextField, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useAppSelector } from "../../store/store";

const messagesData = [
  { id: 1, text: "Hey! How are you?", sender: "friend" },
  { id: 2, text: "I'm good, what about you?", sender: "me" },
  { id: 3, text: "I'm great too!", sender: "friend" },
];

export default function Messages() {
  // useSelector
  const authData = useAppSelector((state) => state.auth);

  // useState
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");

  // useEffect
  useEffect(() => {
    if (authData) {
      fetchMessages();
    }
  }, []);

  // Functions

  /**
   * Handle sending a new message
   * @description Adds a new message to the messages state
   * @param {React.FormEvent<HTMLFormElement>} event Form event
   * @returns {void}
   */
  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: newMessage, sender: "me" },
    ]);
    setNewMessage("");
  };

  const fetchMessages = async () => {
    console.log("Fetching messages");
  };

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
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <IconButton onClick={handleSendMessage} className="ml-2">
          <SendIcon color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
