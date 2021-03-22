import clubStore from "../../Stores/ClubStore";
import { observer } from "mobx-react";
import { Link, useParams } from "react-router-dom";
import { useImperativeHandle, useState } from "react";

const UpdateClub = () => {
  const { id } = useParams();
  const updatedClub = clubStore.clubs.find((club) => club.id === +id);
  const [club, setUpdatedClub] = useState(updatedClub);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setUpdatedClub({ ...club, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <button onClick={() => clubStore.updateClub(club)}>Submit</button>
      </div>
    </form>
  );
};

export default observer(UpdateClub);
