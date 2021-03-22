import playerStore from "../../Stores/PlayerStore";
import DeletePlayerButton from "./DeletePlayerButton";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";

const PlayerList = () => {
  const playerList = playerStore.players.map((player) => (
    <div>
      <Link to={`/players/${player.id}`}>
        <p>{player.name}</p>
      </Link>
      <DeletePlayerButton playerID={player.id} />
    </div>
  ));
  console.log(playerList);
  return (
    <div>
      <Link to="/create-player">
        <p>Add New Player</p>
      </Link>
      {playerList}
    </div>
  );
};

export default observer(PlayerList);
