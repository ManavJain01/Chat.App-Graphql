import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";

interface MessageProps {
  message: {
    id: number;
    text: string;
    sender: string;
  };
}

export default function Message({ message }: MessageProps) {
  // useSelector
  const authData = useAppSelector(store => store.auth);
  const userId = authData.id;

  const MessageBox = styled(Box)<{ sender: string }>(({ sender }) => ({
    marginTop: "8px",
    padding: "12px",
    borderRadius: "8px",
    maxWidth: "320px",
    width: "fit-content",
    backgroundColor: sender === userId ? "#3b82f6" : "inherit",
    color: sender === userId ? "#ffffff" : "inherit",
    marginLeft: sender === userId ? "auto" : "0",
  }));
  
  return (
    <motion.div
      initial={{ opacity: 0, x: message.sender === userId ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MessageBox sender={message.sender}>{message.text}</MessageBox>
    </motion.div>
  );
}
