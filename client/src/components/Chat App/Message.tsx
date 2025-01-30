import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface MessageProps {
  message: {
    id: number;
    text: string;
    sender: string;
  };
}

const MessageBox = styled(Box)<{ sender: string }>(({ sender }) => ({
  marginTop: "8px",
  padding: "12px",
  borderRadius: "8px",
  maxWidth: "320px",
  width: "fit-content",
  backgroundColor: sender === "me" ? "#3b82f6" : "inherit",
  color: sender === "me" ? "#ffffff" : "inherit",
  marginLeft: sender === "me" ? "auto" : "0",
}));

export default function Message({ message }: MessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: message.sender === "me" ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MessageBox sender={message.sender}>{message.text}</MessageBox>
    </motion.div>
  );
}
