import { Typography, Avatar, Stack } from "@mui/material";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { useState } from "react";

export default function ChatArea() {
  const [selectedFriend, setSelectedFriend] = useState({});

  if (!selectedFriend) {
    return <NoChatSelected />;
  }

  return (
    <Stack direction="column" gap={2} sx={{ width: "100%" }}>
      {/* Chat Header */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={selectedFriend.name} src={selectedFriend.avatar} />
        <Typography variant="h6" className="font-bold">
          {selectedFriend.name}
        </Typography>
      </Stack>

      {/* Chat Messages */}
      <Messages />
    </Stack>
  );
}
