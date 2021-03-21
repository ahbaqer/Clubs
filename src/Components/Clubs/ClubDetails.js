import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";
import { Route, Switch, Link, useParams } from "react-router-dom";

const ClubDetails = () => {
  const { clubID } = useParams();
  const foundClub = clubStore.clubs.filter((club) => club.id === +clubID);

  return (
    <>
      <div>
        <p>update club details</p>
        <div>
          <p>{foundClub.name}</p>
          <p>Outfit Color {foundClub.outfitColor}</p>
          <p>Location{foundClub.location}</p>
        </div>
        ;<p>Add New Player</p>
      </div>
      <div>
        <h1>Players:</h1>
        <ul>
          <li>fetch player list</li>
        </ul>
      </div>
    </>
  );
};
export default observer(ClubDetails);
