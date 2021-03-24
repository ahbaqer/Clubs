import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

// import components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
//Club Import
import clubStore from "./Stores/ClubStore";
import ClubPage from "./Components/Clubs/ClubsPage";
import ClubList from "./Components/Clubs/ClubList";
import ClubDetails from "./Components/Clubs/ClubDetails";
import CreateClub from "./Components/Clubs/CreateClub";
import UpdateClub from "./Components/Clubs/UpdateClub";
// League Import
import LeagueList from "./Components/Leagues/LeagueList";
import LeagueDetails from "./Components/Leagues/LeagueDetails";
import CreateLeague from "./Components/Leagues/CreateLeague";
import UpdateLeague from "./Components/Leagues/UpdateLeague";
// Player Import
import PlayerList from "./Components/Players/PlayerList";
import PlayerDetails from "./Components/Players/PlayerDetails";
import CreatePlayer from "./Components/Players/CreatePlayer";
import UpdatePlayer from "./Components/Players/UpdatePlayer";

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
          <Route exact path="/clubs/:id/update">
            <UpdateClub />
          </Route>
          // Leagues Components
          <Route exact path="/leagues">
            <LeagueList />
          </Route>
          <Route exact path="/leagues/:id">
            <LeagueDetails />
          </Route>
          <Route exact path="/create-league">
            <CreateLeague />
          </Route>
          <Route exact path="/leagues/:id/update">
            <UpdateLeague />
          </Route>
          //Players Components
          <Route exact path="/players">
            <PlayerList />
          </Route>
          <Route exact path="/players/:id">
            <PlayerDetails />
          </Route>
          <Route exact path="/create-player">
            <CreatePlayer />
          </Route>
          <Route exact path="/players/:id/update">
            <UpdatePlayer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
