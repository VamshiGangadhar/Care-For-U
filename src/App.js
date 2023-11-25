import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Hospital from "./components/Dashboard/Subpages/Hospital/Hospital";
import Emergency from "./components/Dashboard/Subpages/Emergency/Emergency";
import Profile from "./components/Dashboard/Subpages/Profile/Profile";
import Notifications from "./components/Dashboard/Subpages/Notifications/Notifications";
import Appointment from "./components/Dashboard/Subpages/Appointment/Appointment";
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/SignUp/SignUp";
import YourPatients from "./components/Dashboard/Subpages/YourPatients/YourPatients";
import YourHealthStatus from "./components/Dashboard/Subpages/YourHealthStatus/YourHealthStatus";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Hospital />} />
          <Route path="/dashboard/emergency" element={<Emergency />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/appointment" element={<Appointment />} />
          <Route path="/dashboard/yourpatients" element={<YourPatients />} />
          <Route path="/dashboard/yourhealthstatus" element={<YourHealthStatus />} />
        </Route>
        <Route path="/auth" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
