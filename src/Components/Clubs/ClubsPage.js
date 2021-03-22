import { Switch, Route } from "react-router";
import ClubList from "./ClubList";
import ClubDetails from "./ClubDetails";
import CreateClub from "./CreateClub";
import UpdateClub from "./UpdateClub";

const ClubPage = () => {
  return (
    <div>
      <h1>Welcome To Clubs Page</h1>
      <Switch>
        <Route exact path="/clubsList">
          <ClubList />
        </Route>
        <Route exact path="/clubs/id">
          <ClubDetails />
        </Route>
        <Route exact path="/create-club">
          <CreateClub />
        </Route>
        <Route exact path="/clubs/:id/update">
          <UpdateClub />
        </Route>
      </Switch>
    </div>
  );
};

export default ClubPage;
