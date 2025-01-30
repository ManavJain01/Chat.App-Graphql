import { Typography, Avatar, Stack } from "@mui/material";

import Messages from "./Messages";

export default function ChatArea() {
  return (
    <Stack direction="column" gap={2} sx={{ width: "100%" }}>
      {/* Chat Header */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt="User" src="https://via.placeholder.com/50" />
        <Typography variant="h6" className="font-bold">
          John Doe
        </Typography>
      </Stack>

      {/* Chat Messages */}
      <Messages />
    </Stack>
  );
}
