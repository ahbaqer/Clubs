import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ClubList from "./Components/Clubs/ClubList";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Home />

          <Route path="/clubs">
            <ClubList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
