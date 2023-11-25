import React from "react";
import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";

const Profile = () => {
  // Replace with actual user data
  const user = sessionStorage.getItem("userName");
  const userData = {
    name: user,
    age: 28,
    gender: "Male",
    email: user + "@email.com",
    profileImage: "",
  };

  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Card sx={{ width: "1000px" }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Avatar
                src={userData.profileImage}
                alt={userData.name}
                sx={{ width: 150, height: 150 }}
              />
            </Box>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {userData.name}
            </Typography>
            <Divider sx={{ marginY: "20px" }} />
            <Typography variant="h6">Profile Information</Typography>
            <Typography>
              <strong>Age:</strong> {userData.age}
            </Typography>
            <Typography>
              <strong>Gender:</strong> {userData.gender}
            </Typography>
            <Divider sx={{ marginY: "20px" }} />
            <Typography variant="h6">Contact Information</Typography>
            <Typography>
              <strong>Email:</strong> {userData.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </CssBaseline>
  );
};

export default Profile;
