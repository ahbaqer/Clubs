import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";
import playerStore from "../../Stores/PlayerStore";
import { Route, Switch, Link, useParams } from "react-router-dom";

const ClubDetails = () => {
  const { id } = useParams();
  const foundClub = clubStore.clubs.filter((club) => club.id === +id);
  console.log(id);
  console.log(foundClub);
  const playersFound = playerStore.players.filter(
    (player) => player.clubID === +id
  );
  const playerList = playersFound.map((player) => <li>{player.name}</li>);
  return (
    <>
      <div>
        <Link to={`/clubs/${id}/update`}>
          <p>update club details</p>
        </Link>
        <div>
          <p>{foundClub.name}</p>
          <p>Outfit Color {foundClub.outfitColor}</p>
          <p>Location{foundClub.location}</p>
        </div>
        <Link to="/create-player">
          <p>Add New Player</p>
        </Link>
      </div>
      <div>
        <h1>Players:</h1>
        <ul>
          <playerList />
        </ul>
      </div>
    </>
  );
};
export default observer(ClubDetails);
