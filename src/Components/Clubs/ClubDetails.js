import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";
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

const ClubDetails = () => {
  const { id } = useParams();
  const foundClub = clubStore.clubs.find((club) => club.id === +id);
  console.log(id);
  console.log(foundClub);
  const playersFound = playerStore.players.filter(
    (player) => player.clubID === +id
  );
  const playerList = playersFound.map((player) => (
    <Link to={`/players/${player.id}`}>
      <li>{player.name}</li>
    </Link>
  ));
  return (
    <>
      <div>
        <CardWrapper>
          <div>
            <Name>{foundClub.name}</Name>
            <p>Outfit Color : {foundClub.outfitColor}</p>
            <p>Location : {foundClub.location}</p>
            <CardWrapper>
              <CardImg>
                <img src={foundClub.logo} alt={foundClub.name} />
              </CardImg>
            </CardWrapper>
          </div>
        </CardWrapper>
      </div>
      <CardFieldset>
        <CardLink>
          <Link to={`/clubs/${id}/update`}>
            <p>Update Club Details</p>
          </Link>
        </CardLink>
      </CardFieldset>

      <div>
        <Names>Players</Names>
        <h2>{playerList}</h2>
        <Link to="/create-player">
          <CardButton>Add New Player</CardButton>
        </Link>
      </div>
    </>
  );
};
export default observer(ClubDetails);
