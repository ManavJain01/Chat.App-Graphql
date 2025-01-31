import { Typography, Avatar, Stack } from "@mui/material";
import { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import { useGetUserById } from "../../graphql/user.graphql";
import LazyComponent from "../LazyComponent";
import LoadingPage from "../LoadingPage";
import { toast } from "react-toastify";

// Importing Local Components
const Messages = lazy(() => import("./Messages"));
const NoChatSelected = lazy(() => import("./NoChatSelected"));

// Define the Friend type interface
interface Friend {
  name: string;
}

export default function ChatArea() {
  // useParams
  const { id } = useParams();

  // API Calls
  const { data, loading, error } = useGetUserById(id || "");

  // useState with Friend type
  const [friend, setFriend] = useState<Friend | null>(null);

  // useEffect to update the friend state when data is fetched
  useEffect(() => {
    if (data?.user) {
      setFriend(data.user);
    }
    console.log("data:", data);
  }, [data]);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (!id) {
    return <LazyComponent><NoChatSelected /></LazyComponent>;
  } else if (loading) {
    return <LoadingPage />
  }

  return (
    <Stack direction="column" gap={2} sx={{ width: "100%" }}>
      {/* Chat Header */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt={friend?.name} />
        <Typography variant="h6" className="font-bold">
          {friend?.name}
        </Typography>
      </Stack>

      {/* Chat Messages */}
      <LazyComponent><Messages /></LazyComponent>
    </Stack>
  );
}
