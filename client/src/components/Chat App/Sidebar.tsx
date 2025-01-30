import { Typography, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";

const friends = [
  { id: 1, name: "John Doe", avatar: "https://via.placeholder.com/50" },
  { id: 2, name: "Jane Smith", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "Alice Brown", avatar: "https://via.placeholder.com/50" },
  { id: 4, name: "Charlie Johnson", avatar: "https://via.placeholder.com/50" },
];

export default function Sidebar() {
  return (
    <Stack direction={"column"} gap={2} sx={{ width: "30vw" }}>
      <Typography variant="h6" className="mb-4 font-bold">
        Chats
      </Typography>
      {friends.map((friend, index) => (
        <motion.div
          key={friend.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={friend.name} src={friend.avatar} />
            <Typography variant="body1">{friend.name}</Typography>
          </Stack>
        </motion.div>
      ))}
    </Stack>
  );
}
