import leagueStore from "../../Stores/LeagueStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import LeagueDetails from "./LeagueDetails";

const LeagueList = () => {
  return (
    <div>
      <Link to="/create-league">
        <button>Add New league</button>
      </Link>
      <h3>leagues List:</h3>
      <li>
        <ul>
          <Link to="/leagues/EPL">
            <p>English Premier League</p>
          </Link>
        </ul>
      </li>
    </div>
  );
};

export default observer(LeagueList);
