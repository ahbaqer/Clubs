import playerStore from "../../Stores/PlayerStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useImperativeHandle, useState } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  CardButtonn,
} from "../Styles/Styles";

const CreatePlayer = () => {
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    age: 0,
    position: "",
    number: 0,
    club: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setNewPlayer({ ...newPlayer, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardWrapper>
          <CardBody>
            <CardHeader>
              <CardHeading>Create Player Page</CardHeading>
            </CardHeader>

            <CardFieldset>
              <CardInput
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter Player Name"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardInput
                type="text"
                name="position"
                onChange={handleChange}
                placeholder="Enter Player Position"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardInput
                type="text"
                name="age"
                onChange={handleChange}
                placeholder="Enter Player Age"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardInput
                type="text"
                name="club"
                onChange={handleChange}
                placeholder="Enter Player's Club Name"
              ></CardInput>
            </CardFieldset>
            <br />

            <CardFieldset>
              <CardButtonn onClick={() => playerStore.createPlayer(newPlayer)}>
                Submit
              </CardButtonn>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    </form>
  );
};

export default observer(CreatePlayer);
