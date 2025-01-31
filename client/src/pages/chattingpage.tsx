import { Stack } from "@mui/material";
import { lazy } from "react";
import LazyComponent from "../components/LazyComponent";
const Sidebar = lazy(() => import('../components/Chat App/Sidebar'));
const ChatArea = lazy(() => import('../components/Chat App/ChatArea'));

const ChattingPage = () => {
  return (
    <Stack direction="row" sx={{ minHeight: "80vh", padding: "30px 50px" }}>
      {/* Sidebar */}
      <LazyComponent><Sidebar /></LazyComponent>

      {/* Chat Area */}
      <LazyComponent><ChatArea /></LazyComponent>
    </Stack>
  );
};

export default ChattingPage;
