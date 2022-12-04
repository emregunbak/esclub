import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Club from "./Components/Clubs/Club";
import Clubs from "./Components/Clubs/Clubs";
import Events from "./Components/Events";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";

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

        </Routes>
      </div>
    </>
  );
}
export default App;
