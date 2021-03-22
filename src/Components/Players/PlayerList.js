import playerStore from "../../Stores/PlayerStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";

const PlayerList = () => {
  const playerList = playerStore.players.map((player) => (
    <div>
      <Link to={`/players/${player.id}`}>
        <p>{player.name}</p>
      </Link>
    </div>
  ));

  return <div>{playerList}</div>;
};

export default observer(PlayerList);
