import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignUp } from "../graphql/auth.graphql";

const SignUp = () => {
  // Api Calls
  const [signUp, { loading: isLoading, error }] = useSignUp();

  // useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Default role is USER

  // Functions
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await signUp({
        variables: { name, email, password, role },
      });

      console.log("data: ", data);

      toast.success("Sign Up Successful");
    } catch (err) {
      toast.error("Sign Up Failed");
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "50px auto", padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
            required
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="MANAGER">MANAGER</MenuItem>
            <MenuItem value="USER">USER</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ marginTop: "16px" }}
        >
          {isLoading ? <CircularProgress size={24} /> : "Sign Up"}
        </Button>
      </form>
      {error && (
        <Typography color="error" variant="body2">
          error
        </Typography>
      )}
    </Box>
  );
};

export default SignUp;
