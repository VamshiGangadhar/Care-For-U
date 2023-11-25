import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";
import SickIcon from "@mui/icons-material/Sick";
import LinearProgress from "@mui/material/LinearProgress";

const YourPatients = () => {
  const userName = sessionStorage.getItem("userName");
  const userToken = sessionStorage.getItem("userToken");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doctor = userName;
    const patientsUnderDoctor = async () => {
      try {
        const apiUrl =
          "http://172.29.241.133:4000/channels/mychannel/chaincodes/fabcar/GetPatientsByDoctor";
        const headers = {
          Authorization: `Bearer ${userToken}`,
        };
        const data = {
          args: JSON.stringify([doctor]),
        };
        axios
          .get(apiUrl, { headers, params: { data } })
          .then((response) => {
            setResponse(response.data.result);
            setLoading(false);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    patientsUnderDoctor();
  }, [userName, userToken]);

  return (
    <CssBaseline>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Welcome, {userName}
        </Typography>
        <Card sx={{ marginBottom: 3 }}>
          <CardHeader
            title="Your Patients"
            avatar={<SickIcon sx={{ fontSize: 32 }} />}
          />
          {loading ? (
            <LinearProgress />
          ) : (
            <CardContent>
              <Grid container spacing={3}>
                {response.map((patient, index) => (
                  <Grid
                    sx={{ width: "300px" }}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                  >
                    <Card>
                      <CardHeader title={patient.name} />
                      <CardContent>
                        <Typography>
                          Temperature: {patient.temperature}
                        </Typography>
                        <Typography>
                          Heart Rate: {patient.heart_rate}
                        </Typography>
                        <Typography>Humidity: {patient.humidity}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          )}
        </Card>
      </Box>
    </CssBaseline>
  );
};

export default YourPatients;
