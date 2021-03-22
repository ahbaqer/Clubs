import clubStore from "../../Stores/ClubStore";

import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import DeleteClubsButton from "./DeleteClubsButton";

const ClubList = () => {
  const clubList = clubStore.clubs.map((club) => (
    <div>
      <Link to={`/clubs/${club.id}`}>
        <p>{club.name}</p>
      </Link>
      <DeleteClubsButton clubID={club.id} />
    </div>
  ));

  return (
    <div>
      {" "}
      <Link to="/create-club">Create New club</Link>
      {clubList}
    </div>
  );
};

export default observer(ClubList);
