import { observer } from "mobx-react";
import leagueStore from "../../Stores/LeagueStore";

const DeleteLeagueButton = (props) => {
  return (
    <button onClick={() => leagueStore.deleteLeague(props.leagueID)}>
      {" "}
      Delete League
    </button>
  );
};
export default observer(DeleteLeagueButton);
