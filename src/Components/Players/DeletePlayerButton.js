import { observer } from "mobx-react";
import playerStore from "../../Stores/PlayerStore";
import { CardOptions, CardOptionsItem, CardIcon } from "../Styles/Styles";

const DeletePlayerButton = (props) => {
  return (
    <div>
      <CardOptions>
        <CardOptionsItem>
          <CardIcon onClick={() => playerStore.deletePlayer(props.playerID)}>
            {" "}
            Delete Player
          </CardIcon>
        </CardOptionsItem>
      </CardOptions>
    </div>
  );
};
export default observer(DeletePlayerButton);
