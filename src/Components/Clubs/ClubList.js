import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import DeleteClubsButton from "./DeleteClubsButton";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  Float,
  CardButton,
  CardLink,
  CardOptions,
  CardOptionsItem,
} from "../Styles/Styles";

const ClubList = () => {
  const clubList = clubStore.clubs.map((club) => (
    <Float>
      <CardWrapper>
        <Link to={`/clubs/${club.id}`}>
          <CardHeading>{club.name}</CardHeading>
        </Link>
        <CardFieldset>
          <CardLink>
            <DeleteClubsButton clubID={club.id} />
          </CardLink>
        </CardFieldset>
      </CardWrapper>
    </Float>
  ));

  return (
    <div>
      <floatChild>
        <div>{clubList}</div>
      </floatChild>

      <Link to="/create-club">
        <CardButton>+ New club</CardButton>
      </Link>
    </div>
  );
};

export default observer(ClubList);
