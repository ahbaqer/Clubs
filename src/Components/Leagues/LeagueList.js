import leagueStore from "../../Stores/LeagueStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import LeagueDetails from "./LeagueDetails";
import DeleteLeagueButton from "./DeleteLeagueButton";

const LeagueList = () => {
  const leagueList = leagueStore.leagues.map((league) => (
    <div>
      <Link to={`/leagues/${league.id}`}>
        <p>{league.name}</p>
      </Link>
      <DeleteLeagueButton leagueID={league.id} />
    </div>
  ));
  return (
    <div>
      <Link to="/create-league">Create New League</Link>
      {leagueList}
    </div>
  );
};

export default observer(LeagueList);
