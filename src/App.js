import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs/ClubsList";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Clubs />
      </div>
    </div>
  );
}

export default App;
