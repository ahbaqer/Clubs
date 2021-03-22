import leagueStore from "../../Stores/LeagueStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import LeagueDetails from "./LeagueDetails";

const LeagueList = () => {
  const leagueList = leagueStore.leagues.map((league) => (
    <div>
      <Link to={`/leagues/${league.id}`}>
        <p>{league.name}</p>
      </Link>
    </div>
  ));
  return <div>{leagueList}</div>;
};

export default observer(LeagueList);
