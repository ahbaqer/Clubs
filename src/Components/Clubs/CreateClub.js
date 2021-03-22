import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { useImperativeHandle, useState } from "react";
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
        <h1>Create Club Page</h1>
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
        <button onClick={() => clubStore.createClub(newClub)}>Submit</button>
      </div>
    </form>
  );
};

export default observer(CreateClub);
