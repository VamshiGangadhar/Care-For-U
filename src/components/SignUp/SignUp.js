import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "@mui/material/Alert";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        HealthCare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [orgName, setOrgName] = useState("role");
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);

  const handleRoleChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4000/users";
    const formData = {
      username,
      orgName,
    };
    axios
      .post(apiUrl, formData)
      .then((response) => {
        setUsername("");
        setOrgName("role");
        setToken(response.data.token);
        showSnackbar();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showSnackbar = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Select
              label="Role"
              placeholder="Role"
              name="role"
              value={orgName}
              onChange={handleRoleChange}
              fullWidth
            >
              <MenuItem value="role">Role</MenuItem>
              <MenuItem value="Org1">Doctor</MenuItem>
              <MenuItem value="Org2">Patient</MenuItem>
            </Select>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={showSnackbar}
            >
              Sign Up
            </Button>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item>
                <Link to="/auth" variant="body2">
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Copy private key
            <CopyToClipboard text={token}>
              <IconButton
                size="small"
                aria-label="copy"
                color="inherit"
                sx={{ marginLeft: "10px" }}
              >
                <FileCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
