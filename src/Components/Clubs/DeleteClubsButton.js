import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";

const DeleteClubButton = (props) => {
  return (
    <button onClick={() => clubStore.deleteClub(props.clubID)}>
      {" "}
      Delete Club
    </button>
  );
};
export default observer(DeleteClubButton);
