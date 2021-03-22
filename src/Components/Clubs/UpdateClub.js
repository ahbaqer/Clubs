import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { useImperativeHandle, useState } from "react";
const UpdateClub = () => {
  const [newClub, setNewClub] = useState([null]);
  const handleChange = (event) => {
    setNewClub({ ...newClub, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Update Club Page</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter Club Name"
      ></input>
      <br />
      <label>Location:</label>
      <input
        type="text"
        name="location"
        onChange={handleChange}
        placeholder="Enter Club Location"
      ></input>
      <br />
      <label>Outfit:</label>
      <input
        type="text"
        name="outfitColor"
        onChange={handleChange}
        placeholder="Enter Club Outfit Color"
      ></input>
      <br />
      <label>Logo:</label>
      <input
        type="text"
        name="logo"
        onChange={handleChange}
        placeholder="Enter Club Logo URL"
      ></input>
      <br />
      <button onClick={clubStore.updateClub()}>Submit</button>
    </div>
  );
};

export default observer(UpdateClub);
