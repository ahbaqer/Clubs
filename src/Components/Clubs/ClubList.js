import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";

const ClubList = () => {
  const clubList = clubStore.clubs.map((club) => (
    <div>
      <Link to={`/clubs/${club.id}`}>
        <p>{club.name}</p>
      </Link>
    </div>
  ));

  return <div>{clubList}</div>;
};

export default observer(ClubList);
