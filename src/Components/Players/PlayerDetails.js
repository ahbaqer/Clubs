import { observer } from "mobx-react";
import playerStore from "../../Stores/PlayerStore";
import { Route, Switch, Link, useParams } from "react-router-dom";
import {
  CardWrapper,
  CardFieldset,
  CardLink,
  Names,
  Name,
  CardImg,
  CardButton,
  CardOptions,
} from "../Styles/Styles";
const PlayerDetails = () => {
  const { id } = useParams();
  const foundPlayer = playerStore.players.find((player) => player.id === +id);
  console.log(foundPlayer);

  return (
    <>
      <div>
        <CardWrapper>
          <div>
            <Name>{foundPlayer.name}</Name>
            <p>Position: {foundPlayer.position}</p>
            <p>Age: {foundPlayer.age}</p>
          </div>
        </CardWrapper>
        <CardFieldset>
          <CardLink>
            <Link to={`/players/${id}/update`}>
              <p>update Player details</p>
            </Link>
          </CardLink>
        </CardFieldset>
        <button>Delete Player</button>
      </div>
    </>
  );
};
export default observer(PlayerDetails);
