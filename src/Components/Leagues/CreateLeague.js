import leagueStore from "../../Stores/LeagueStore";
import { useImperativeHandle, useState } from "react";
const CreateLeague = () => {
  const [newLeague, setNewLeague] = useState([null]);
  const handleChange = (event) => {
    setNewClub({ ...newClub, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Create League Page</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter League Name"
      ></input>
      <br />
      <label>Region:</label>
      <input
        type="text"
        name="region"
        onChange={handleChange}
        placeholder="Enter League region"
      ></input>
      <br />
      <label>Prize:</label>
      <input
        type="text"
        name="prize"
        onChange={handleChange}
        placeholder="Enter Prize "
      ></input>
      <br />
      <label>Type:</label>
      <input
        type="text"
        name="type"
        onChange={handleChange}
        placeholder="Enter Club Logo URL"
      ></input>
      <br />
      <button onClick={leagueStore.createLeague()}>Submit</button>
    </div>
  );
};

export default CreateLeague;
