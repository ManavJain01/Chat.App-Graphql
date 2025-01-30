import { Button, Stack, Typography } from "@mui/material";

export default function NoChatSelected() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Typography variant="h5" className="font-bold">
        Start Chatting
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Select a friend to start chatting.
      </Typography>
      <Button variant="contained" color="primary">
        Select a Friend
      </Button>
    </Stack>
  );
}
