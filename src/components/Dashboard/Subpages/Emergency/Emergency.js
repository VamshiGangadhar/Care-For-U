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
  AlertTitle,
} from "@mui/material";
import { Alert } from "@mui/material";

const Emergency = () => {
  const [contactInfo, setContactInfo] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleContactChange = (event) => {
    setContactInfo(event.target.value);
  };

  const handleRequestAmbulance = () => {
    setRequestSent(true);
    setOpenSnackbar(true);
  };

  const handleMakeACall = () => {
    setShowAlert(true);
  };

  const [showAlert, setShowAlert] = React.useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <CssBaseline>
      <Box>
        <Card sx={{ width: "1000px", margin: "20px auto", padding: "20px" }}>
          <CardHeader title="Emergency Contact" />
          <CardContent>
            <Typography variant="body2" sx={{ margin: "20px 0" }}>
              In case of an emergency, you can contact the hospital and request
              an ambulance.
            </Typography>
            <TextField
              label="Contact Information"
              fullWidth
              value={contactInfo}
              onChange={handleContactChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleRequestAmbulance}
              sx={{ margin: "20px 0" }}
            >
              Request Ambulance
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleMakeACall}
              sx={{ margin: "20px" }}
            >
              Make a call
            </Button>
            {showAlert && (
              <Alert severity="info" onClose={() => setShowAlert(false)}>
                <AlertTitle>Call to</AlertTitle>
                108
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Ambulance request sent successfully!
        </Alert>
      </Snackbar>
    </CssBaseline>
  );
};

export default Emergency;
