import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
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

const CreateClub = () => {
  const [newClub, setNewClub] = useState({
    name: "",
    location: "",
    outfitColor: "",
    logo: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setNewClub({ ...newClub, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardWrapper>
          <CardBody>
            <CardHeader>
              <CardHeading>Create Club Page</CardHeading>
            </CardHeader>
            <CardFieldset>
              <CardInput
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter Club Name"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardInput
                type="text"
                name="location"
                onChange={handleChange}
                placeholder="Enter Club Location"
              ></CardInput>
            </CardFieldset>
            <CardFieldset>
              <CardInput
                type="text"
                name="outfitColor"
                onChange={handleChange}
                placeholder="Enter Club Outfit Color"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardInput
                type="text"
                name="logo"
                onChange={handleChange}
                placeholder="Enter Club Logo URL"
              ></CardInput>
            </CardFieldset>
            <br />
            <CardFieldset>
              <CardButtonn onClick={() => clubStore.createClub(newClub)}>
                Submit
              </CardButtonn>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    </form>
  );
};

export default observer(CreateClub);
