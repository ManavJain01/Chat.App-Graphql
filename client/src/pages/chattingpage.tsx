import { Stack } from "@mui/material";
import Sidebar from "../components/Chat App/Sidebar";
import ChatArea from "../components/Chat App/ChatArea";

const ChattingPage = () => {
  return (
    <Stack direction="row" sx={{ minHeight: "80vh", padding: "30px 50px" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Chat Area */}
      <ChatArea />
    </Stack>
  );
};

export default ChattingPage;
