import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { useState } from "react";

// import components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ClubList from "./Components/Clubs/ClubList";
import ClubDetails from "./Components/Clubs/ClubDetails";
import CreateClub from "./Components/Clubs/CreateClub";
import LeagueList from "./Components/Leagues/LeagueList";
import LeagueDetails from "./Components/Leagues/LeagueDetails";
import clubStore from "./Stores/ClubStore";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          // Clubs Components
          <Route exact path="/clubs">
            <ClubList />
          </Route>
          <Route exact path="/clubs/:id">
            <ClubDetails />
          </Route>
          <Route exact path="/create-club">
            <CreateClub />
          </Route>
          // Leagues Components
          <Route exact path="/leagues">
            <LeagueList />
          </Route>
          <Route exact path="/leagues/EPL">
            <LeagueDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
