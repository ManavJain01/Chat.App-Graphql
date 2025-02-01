import { Typography, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useGetUsers } from "../../graphql/user.graphql";
import { useGetFriends } from "../../graphql/chat.graphql"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

// Define the User type
interface User {
  id: string;
  name: string;
  avatar?: string; // Optional in case avatar is not always provided
}

// Sidebar Component
export default function Sidebar() {
  // useSelector
  const authData = useAppSelector(store => store.auth);
  const userId = authData.id;

  // API Call
  const { data, loading: isLoading, error } = useGetUsers();
  const { data: allFriends } = useGetFriends(userId);
  
  // useNavigate
  const navigate = useNavigate();
  
  // useState
  const [friends, setFriends] = useState<User[]>([]);
  
  // useEffect to update state when data changes
  useEffect(() => {
    if (allFriends?.getFriends) {
      setFriends(allFriends.getFriends as User[] || []); // Type assertion
    }
  }, [allFriends]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  // Handle friend selection
  const handleSelectFriend = (friend: User) => {
    navigate(`/chat/${friend._id}`);
  };

  return (
    <Stack direction="column" gap={2} sx={{ width: "30vw" }}>
      <Typography variant="h6" className="mb-4 font-bold">
        Chats
      </Typography>
      {friends.map((friend, index) => (
        <motion.div
          key={index} // Use unique `id` instead of `index`
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ cursor: "pointer" }} // Apply pointer cursor here
          onClick={() => handleSelectFriend(friend)} // On click select the friend
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={friend.name} src={friend.avatar || ""} />
            <Typography variant="body1">{friend.name}</Typography>
          </Stack>
        </motion.div>
      ))}
    </Stack>
  );
}
