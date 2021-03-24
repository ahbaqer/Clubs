import { observer } from "mobx-react";
import leagueStore from "../../Stores/LeagueStore";
import clubStore from "../../Stores/ClubStore";
import { Route, Switch, Link, useParams } from "react-router-dom";
import { CardWrapper, Name, Names } from "../Styles/Styles";

const LeagueDetails = () => {
  const { id } = useParams();
  const foundLeague = leagueStore.leagues.find((league) => league.id === +id);
  const clubsFound = clubStore.clubs.find((club) => club.leagueID === +id);
  // const clubList = clubsFound.map((club) => <li>{club.name}</li>);
  return (
    <>
      <div>
        <CardWrapper>
          <Name>{foundLeague.name}</Name>
          <p>region: {foundLeague.region}</p>
          <p>Prize: {foundLeague.prize}</p>
          <p>Type: {foundLeague.leagueType}</p>
        </CardWrapper>
      </div>
      <div>
        <Names>Teams </Names>
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
