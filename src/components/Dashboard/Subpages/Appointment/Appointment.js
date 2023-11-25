import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Typography,
  TextField,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";

const Appointment = () => {
  const [appointmentInfo, setAppointmentInfo] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInfoChange = (event) => {
    setAppointmentInfo(event.target.value);
  };

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  const handleBookAppointment = () => {
    setAppointmentBooked(true);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <CssBaseline>
      <Box>
        <Card sx={{ width: "1000px", margin: "20px auto", padding: "20px" }}>
          <CardHeader title="Book Appointment" />
          <CardContent sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <Typography variant="body2">
              Book an appointment with the hospital by providing the necessary
              information.
            </Typography>
            <TextField
              label="Patient Information"
              fullWidth
              value={appointmentInfo}
              onChange={handleInfoChange}
            />
            <TextField
              // label="Date"
              type="date"
              fullWidth
              value={appointmentDate}
              onChange={handleDateChange}
            />
            <TextField
              // label="Time"
              type="time"
              fullWidth
              value={appointmentTime}
              onChange={handleTimeChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleBookAppointment}
              sx={{ marginTop: "20px" }}
            >
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Appointment booked successfully!
        </Alert>
      </Snackbar>
    </CssBaseline>
  );
};

export default Appointment;
