import { observer } from "mobx-react";
import leagueStore from "../../Stores/LeagueStore";
import clubStore from "../../Stores/ClubStore";
import { Route, Switch, Link, useParams } from "react-router-dom";

const LeagueDetails = () => {
  const { id } = useParams();
  const foundLeague = leagueStore.leagues.find((league) => league.id === +id);
  const clubsFound = clubStore.clubs.find((club) => club.leagueID === +id);
  // const clubList = clubsFound.map((club) => <li>{club.name}</li>);
  return (
    <>
      <div>
        <h1>{foundLeague.name}</h1>
        <p>region:{foundLeague.region}</p>
        <p>Prize:{foundLeague.prize}</p>
        <p>Type: {foundLeague.leagueType}</p>
      </div>
      <div>
        <h1>Teams:</h1>
        <ul>
          <clubList />
        </ul>
      </div>
      <div>
        <Link to={`/leagues/${id}/update`}>
          <p>Update League Details</p>
        </Link>
      </div>
    </>
  );
};
export default observer(LeagueDetails);
