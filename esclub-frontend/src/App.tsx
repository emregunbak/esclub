import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Club from "./Components/Clubs/Club";
import Clubs from "./Components/Clubs/Clubs";
import Events from "./Components/Events";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/welcome-page/Login";
import Register from "./Components/welcome-page/Register";
import AdminPage from "./Components/Admin/AdminPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="clubs/:clubName"  element={<Club/>} />
          <Route path="/admin"  element={<AdminPage/>} />

        </Routes>
      </div>
    </>
  );
}
export default App;
