import { observer } from "mobx-react";
import playerStore from "../../Stores/PlayerStore";

const DeletePlayerButton = (props) => {
  return (
    <button onClick={() => playerStore.deletePlayer(props.playerID)}>
      {" "}
      Delete Player
    </button>
  );
};
export default observer(DeletePlayerButton);
