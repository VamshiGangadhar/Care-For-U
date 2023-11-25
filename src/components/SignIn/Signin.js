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
import { useDispatch } from "react-redux";
import { setUserRole, setUserToken } from "../../features/roles/roleSlice";
// import { useSelector } from "react-redux";
// import { setUserRole } from "../../features/roles/roleSlice";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        HealthCare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [userValue, setUserValue] = useState(false);
  const [orgName, setOrgName] = useState("role");
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleRoleChange = (event) => {
    setOrgName(event.target.value);
  };
  const userRoleSetting = () => {
    sessionStorage.setItem("userRole",orgName);
    sessionStorage.setItem("userToken", token);
    sessionStorage.setItem("userName",username)
    dispatch(setUserRole(orgName));
    dispatch(setUserToken(token));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://172.29.241.133:4000/users";
    const formData = {
      username,
      orgName,
    };
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl, formData);
        setUsername("");
        setOrgName("role");
        setUserValue(response.data.success);
        setToken(response.data.token);
        userRoleSetting();
        showSnackbar();
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
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
            Sign In
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
              Sign In
            </Button>
            {userValue && (
              <Button to="/" component={Link} fullWidth>
                Hospital Dashboard
              </Button>
            )}
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't an account? Sign Up"}
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
