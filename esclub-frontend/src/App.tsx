import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Clubs from "./Components/Clubs";
import EsclubNavbar from "./Components/EsclubNavbar";
import Events from "./Components/Events";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <EsclubNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
