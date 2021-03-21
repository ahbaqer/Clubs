import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import ClubDetails from "./ClubDetails";

const ClubList = () => {
  return (
    <div>
      <Link to="/create-club">
        <button>Add New Club</button>
      </Link>
      <h3>Clubs List:</h3>
      <li>
        <ul>
          <Link to="/clubs/manchester">
            <p>Manchester</p>
          </Link>
        </ul>
      </li>
    </div>
  );
};

export default observer(ClubList);
