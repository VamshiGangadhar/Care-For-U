import { Box, Card, CardHeader, CssBaseline, Typography } from "@mui/material";
import React, { useState } from "react";
import SideNavButton from "./SideNavButton/SideNavButton";
import { Outlet } from "react-router-dom";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import { useSelector } from "react-redux";
// import {
//   selectUserRole,
//   selectUserToken,
// } from "../../features/roles/roleSlice";

const Dashboard = () => {
  const [selectedPath, setSelectedPath] = useState("/");
  const userToken = sessionStorage.getItem("userToken");
  const userRole = sessionStorage.getItem("userRole");

  const handleSideNavButtonClick = (path) => {
    setSelectedPath(path);
  };
  return (
    <CssBaseline>
      <Box sx={{ display: "flex" }}>
        <Card
          sx={{
            width: "16%",
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            borderRadius: "20px",
            backgroundColor: "#1520A6",
          }}
          elevation={2}
        >
          <CardHeader
            sx={{ color: "#D0E7D2", marginBottom: "30px" }}
            avatar={<LocalHospitalIcon sx={{ backgroundColor: "green" }} />}
            title={<Typography variant="h5">Care-For-U</Typography>}
          />
          <SideNavButton
            title={"Dashboard"}
            path="/"
            selected={selectedPath === "/"}
            onClick={() => handleSideNavButtonClick("/")}
          />
          {userRole === "Org1" && (
            <SideNavButton
              title={"Your Patients"}
              path="/dashboard/yourpatients"
              selected={selectedPath === "/dashboard/yourpatients"}
              onClick={() => handleSideNavButtonClick("/dashboard/yourpatients")}
            />
          )}
          {userRole === "Org2" && (
            <SideNavButton 
              title={"Your Health Status"}
              path="/dashboard/yourhealthstatus"
              selected={selectedPath === "/dashboard/yourhealthstatus"}
              onClick={() => handleSideNavButtonClick("/dashboard/yourhealthstatus")}
            />
          )}
          <SideNavButton
            title={"Emergency"}
            path="/dashboard/emergency"
            selected={selectedPath === "/dashboard/emergency"}
            onClick={() => handleSideNavButtonClick("/dashboard/emergency")}
          />
          <SideNavButton
            title={"Book Appointment"}
            path="/dashboard/appointment"
            selected={selectedPath === "/dashboard/appointment"}
            onClick={() => handleSideNavButtonClick("/dashboard/appointment")}
          />
          <SideNavButton
            title={"Notifications"}
            path="/dashboard/notifications"
            selected={selectedPath === "/dashboard/notifications"}
            onClick={() => handleSideNavButtonClick("/dashboard/notifications")}
          />
          <SideNavButton
            title={"Profile"}
            path="/dashboard/profile"
            selected={selectedPath === "/dashboard/profile"}
            onClick={() => handleSideNavButtonClick("/dashboard/profile")}
          />
        </Card>
        <Box sx={{ margin: "30px" }}>
          <Outlet />
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Dashboard;
