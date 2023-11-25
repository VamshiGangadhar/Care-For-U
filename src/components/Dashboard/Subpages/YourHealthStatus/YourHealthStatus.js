import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SickIcon from "@mui/icons-material/Sick";

const YourHealthStatus = () => {
  const userName = sessionStorage.getItem("userName");
  const userToken = sessionStorage.getItem("userToken");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const patient = userName;
    const patientsHealth = async () => {
      try {
        const apiUrl =
          "http://172.29.241.133:4000/channels/mychannel/chaincodes/fabcar/GetPatientDetails";
        const headers = {
          Authorization: `Bearer ${userToken}`,
        };
        const data = {
          args: JSON.stringify([patient]),
        };
        axios
          .get(apiUrl, { headers, params: { data } })
          .then((response) => {
            setResponse(response.data.result);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    patientsHealth();
  }, [userName, userToken]);
  return (
    <CssBaseline>
      <Box>
        <Card>
          <CardHeader
            title={`${userName} Your Details`}
            avatar={<SickIcon sx={{ fontSize: 32 }} />}
          />
          {loading ? (
            <LinearProgress />
          ) : (
            <CardContent>
              <Typography>Temperature: {response.temperature}</Typography>
              <Typography>Heart Rate: {response.heart_rate}</Typography>
              <Typography>Humidity: {response.humidity}</Typography>
            </CardContent>
          )}
        </Card>
      </Box>
    </CssBaseline>
  );
};

export default YourHealthStatus;
