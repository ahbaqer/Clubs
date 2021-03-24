import { observer } from "mobx-react";
import leagueStore from "../../Stores/LeagueStore";
import { CardOptions, CardOptionsItem, CardIcon } from "../Styles/Styles";

const DeleteLeagueButton = (props) => {
  return (
    <div>
      <CardOptions>
        <CardOptionsItem>
          <CardIcon onClick={() => leagueStore.deleteLeague(props.leagueID)}>
            {" "}
            Delete League
          </CardIcon>
        </CardOptionsItem>
      </CardOptions>
    </div>
  );
};
export default observer(DeleteLeagueButton);
