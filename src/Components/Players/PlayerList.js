import playerStore from "../../Stores/PlayerStore";
import DeletePlayerButton from "./DeletePlayerButton";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardFieldset,
  CardButton,
  CardLink,
  Slider,
  Slide,
  Float,
} from "../Styles/Styles";

const PlayerList = () => {
  const playerList = playerStore.players.map((player) => (
    <div>
      <Float>
        <CardWrapper>
          <CardHeader>
            <Link to={`/players/${player.id}`}>
              <CardHeading>{player.name}</CardHeading>
            </Link>
          </CardHeader>
        </CardWrapper>

        <CardFieldset>
          <CardLink>
            <DeletePlayerButton playerID={player.id} />
          </CardLink>
        </CardFieldset>
      </Float>
    </div>
  ));

  return (
    <div>
      <div>{playerList}</div>
      <Link to="/create-player">
        <CardButton>+ New Player</CardButton>
      </Link>
    </div>
  );
};

export default observer(PlayerList);
