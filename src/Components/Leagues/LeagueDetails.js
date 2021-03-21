import { observer } from "mobx-react";
import leagueStore from "../../Stores/LeagueStore";
import { Route, Switch, Link } from "react-router-dom";

const LeagueDetails = () => {
  const league = leagueStore.leagues;
  return (
    <>
      <div>
        <h1>English Premier League</h1>
        <p>Region: England</p>
        <p>Prize: 1 million Pound</p>
        <p>Tournment Type: League</p>

        <p>update league details</p>
        <p>Add New League</p>
      </div>
      <div>
        <h1>Teams:</h1>
        <ul>
          <li>fetch teams list</li>
        </ul>
      </div>
    </>
  );
};
export default observer(LeagueDetails);
