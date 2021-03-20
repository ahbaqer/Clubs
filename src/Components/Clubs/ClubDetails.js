import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";

const ClubDetails = () => {
  const club = clubStore.clubs;
  return (
    <div>
      <h1>{club.name}</h1>
      <p>Outfit color: {club.outfitColor}</p>
      <p>Location: {club.location}</p>
    </div>
  );
};
export default observer(ClubDetails);
