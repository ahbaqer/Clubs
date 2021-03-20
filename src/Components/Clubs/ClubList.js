import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import ClubDetails from "./ClubDetails";

const ClubList = () => {
  const clubList = clubStore.clubs.map((club) => {
    <ClubDetails club={club} />;
  });
  return <div>{clubList}</div>;
};

export default observer(ClubList);
