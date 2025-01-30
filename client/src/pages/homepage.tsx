import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../store/store";
import { motion } from "framer-motion";

// Feature icons
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const authdata = useAppSelector((store) => store.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 4,
        textAlign: "center",
        p: 3,
      }}
    >
      {/* Hero Section with Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          {t("home page.welcome")}
        </Typography>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Typography variant="h6" gutterBottom>
          {t("home page.description")}
        </Typography>
      </motion.div>

      {/* Feature Icons Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <ChatIcon sx={{ fontSize: 50, color: "#1976D2" }} />
            <Typography variant="body1">Real-time Messaging</Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <GroupIcon sx={{ fontSize: 50, color: "#388E3C" }} />
            <Typography variant="body1">Group Chats</Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <SecurityIcon sx={{ fontSize: 50, color: "#D32F2F" }} />
            <Typography variant="body1">End-to-End Encryption</Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <Button variant="contained" color="primary" component={Link} to="/chat">
          Start Chatting
        </Button>
      </motion.div>

      {/* Conditional Button for Non-Authenticated Users */}
      {!authdata.isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/signup"
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </Box>
  );
};

export default HomePage;
