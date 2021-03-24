import { observer } from "mobx-react";
import clubStore from "../../Stores/ClubStore";
import {
  CardIcon,
  CardOptionsItem,
  CardOptions,
  Float,
} from "../Styles/Styles";

const DeleteClubButton = (props) => {
  return (
    <Float>
      <CardOptions>
        <CardOptionsItem>
          <CardIcon onClick={() => clubStore.deleteClub(props.clubID)}>
            {" "}
            Delete Club{" "}
          </CardIcon>
        </CardOptionsItem>
      </CardOptions>
    </Float>
  );
};
export default observer(DeleteClubButton);
