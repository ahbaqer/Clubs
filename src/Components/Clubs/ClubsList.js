import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";

const Clubs = () => {
  return clubStore.clubs.map((club) => {
    <ul>
      <li>{club.name}</li>
    </ul>;
  });
};

export default observer(Clubs);
