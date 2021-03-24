import leagueStore from "../../Stores/LeagueStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import LeagueDetails from "./LeagueDetails";
import DeleteLeagueButton from "./DeleteLeagueButton";
import {
  CardButton,
  CardWrapper,
  CardHeading,
  CardHeader,
  CardFieldset,
  CardLink,
} from "../Styles/Styles";

const LeagueList = () => {
  const leagueList = leagueStore.leagues.map((league) => (
    <div>
      <Link to={`/leagues/${league.id}`}>
        <CardWrapper>
          <CardHeader>
            <CardHeading>{league.name}</CardHeading>
          </CardHeader>
        </CardWrapper>
      </Link>
      <CardFieldset>
        <CardLink>
          <DeleteLeagueButton leagueID={league.id} />
        </CardLink>
      </CardFieldset>
    </div>
  ));
  return (
    <div>
      {leagueList}
      <Link to="/create-league">
        <CardButton>+ New League</CardButton>
      </Link>
    </div>
  );
};

export default observer(LeagueList);
