import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";
import { Route, Switch, Link } from "react-router-dom";

const ClubDetails = () => {
  const club = clubStore.clubs;
  return (
    <>
      <div>
        <h1>Manchester</h1>
        <p>Outfit Color: Red</p>
        <p>Location: Manchester</p>

        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Logo-493x500.png"
          alt="manchester logo"
        />
        <p>update club details</p>
        <p>Add New Player</p>
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
