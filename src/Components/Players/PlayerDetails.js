import { observer } from "mobx-react";
import playerStore from "../../Stores/PlayerStore";
import { Route, Switch, Link, useParams } from "react-router-dom";

const PlayerDetails = () => {
  const { id } = useParams();
  const foundPlayer = playerStore.players.filter((player) => player.id === +id);
  console.log(foundPlayer);

  return (
    <>
      <div>
        <div>
          <p>{foundPlayer.name}</p>
          <p>Position: {foundPlayer.position}</p>
          <p>Age{foundPlayer.age}</p>
        </div>
        <Link to={`/players/${id}/update`}>
          <p>update Player details</p>
        </Link>
        <button>Delete Player</button>
      </div>
    </>
  );
};
export default observer(PlayerDetails);
