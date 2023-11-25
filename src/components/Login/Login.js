import { Box, CssBaseline, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <CssBaseline>
      <Typography>Login</Typography>
      <Box>
        <TextField label="User" variant="outlined" />
        <TextField label="Password" variant="outlined" />
      </Box>
    </CssBaseline>
  );
};

export default Login;
