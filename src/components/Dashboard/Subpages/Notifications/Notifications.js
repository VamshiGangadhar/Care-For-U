import { Alert, Box, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Notifications = () => {
  const notifications = [
    {
      text: "Your heart rate is high",
      severity: "error",
    },
    {
      text: "little higher that normal",
      severity: "warning",
    },
  ];
  const userName = sessionStorage.getItem("userName");
  const userRole = sessionStorage.getItem("userRole");
  const userToken = sessionStorage.getItem("userToken");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (userRole === "Org1") {
      const doctor = userName;

      const patientsUnderDoctor = async () => {
        try {
          const apiUrl =
            "http://localhost:4000/channels/mychannel/chaincodes/fabcar/GetPatientsByDoctor";
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
            })
            .catch((error) => {
              console.error(error);
            });
        } catch (error) {
          console.error(error);
        }
      };

      patientsUnderDoctor();
    } else if (userRole === "Org2") {
      const patient = userName;
      const patientsHealth = async () => {
        try {
          const apiUrl =
            "http://localhost:4000/channels/mychannel/chaincodes/fabcar/GetPatientDetails";
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
    }
  }, [userName, userToken, userRole]);

  return (
    <CssBaseline>
      <Box sx={{ margin: "20px 0" }}>
        <Typography sx={{ margin: "20px 0" }} variant="h5">
          Notifications
        </Typography>
        <Box>
          {userRole === "Org1" && (
            <Box>
              {response.map((patient, index) => (
                <Box key={index}>
                  {patient.temperature > 80 && (
                    <Alert
                      sx={{ margin: "20px 0" }}
                      key={index}
                      severity="warning"
                    >
                      {patient.name} temperature is high {patient.temperature}
                    </Alert>
                  )}
                  {patient.heart_rate > 72 && (
                    <Alert
                      sx={{ margin: "20px 0" }}
                      key={index}
                      severity="warning"
                    >
                      {patient.name} heart rate is high {patient.heart_rate}
                    </Alert>
                  )}
                </Box>
              ))}
            </Box>
          )}
          {userRole === "Org2" && (
            <Box>
              {response.temperature > 80 && (
                    <Alert
                      sx={{ margin: "20px 0" }}
                      severity="warning"
                    >
                      {response.name} temperature is high {response.temperature}
                    </Alert>
                  )}
                  {response.heart_rate > 72 && (
                    <Alert
                      sx={{ margin: "20px 0" }}
                      severity="warning"
                    >
                      {response.name} heart rate is high {response.heart_rate}
                    </Alert>
                  )}
            </Box>
          )}
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Notifications;
