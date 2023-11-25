import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import SickIcon from "@mui/icons-material/Sick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PersonIcon from "@mui/icons-material/Person";
import MoodIcon from "@mui/icons-material/Mood";

const Hospital = () => {
  const doctors = [
    {
      Doctor: "Dr. Vijay",
      Specialty: "Cardiology",
    },
    {
      Doctor: "Dr. Kiran",
      Specialty: "Dermatology",
    },
    {
      Doctor: "Dr. Jaya Ram",
      Specialty: "Cardiology",
    },
    {
      Doctor: "Dr. Sri",
      Specialty: "Dermatology",
    },
  ];
  const patients = [
    {
      Patient: "Sai",
    },
    {
      Patient: "Sukumar",
    },
    {
      Patient: "deepak",
    },
    {
      Patient: "Ajay",
    },
  ];

  return (
    <CssBaseline>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            marginTop: "50px",
            overflow: "auto",
            maxHeight: "45vh",
          }}
        >
          <Card
            sx={{
              flex: 1,
              marginRight: "20px",
              backgroundColor: "#59CE8F",
              minWidth: "200px",
              // color: "#005691",
            }}
          >
            <CardHeader
              title="Doctors"
              avatar={<MedicationLiquidIcon sx={{ fontSize: 32 }} />}
            />
            <CardContent>
              <List>
                {doctors.map((item, index) => (
                  <ListItem key={index}>
                    <PersonIcon />
                    <Typography>{item.Doctor}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Card
            sx={{
              flex: 1,
              marginRight: "20px",
              backgroundColor: "#59CE8F",
              minWidth: "200px",
            }}
          >
            <CardHeader
              title="Patients"
              avatar={<SickIcon sx={{ fontSize: 32 }} />}
            />
            <CardContent>
              <List>
                {patients.map((item, index) => (
                  <ListItem key={index}>
                    <MoodIcon />
                    <Typography>{item.Patient}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Card sx={{ margin: "20px", marginTop: "0px" }}>
            <Calendar backgroundColor="##59CE8F" />
          </Card>
        </Box>
        <Box
          sx={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/dashboard/appointment"
          >
            Open Appointment Booking
          </Button>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Hospital;
