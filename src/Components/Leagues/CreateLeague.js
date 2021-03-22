import leagueStore from "../../Stores/LeagueStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useImperativeHandle, useState } from "react";
const CreateLeague = () => {
  const [newLeague, setNewLeague] = useState({
    name: "",
    region: "",
    leagueType: "",
    prize: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setNewLeague({ ...newLeague, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <label>Region: </label>
        <input
          type="text"
          name="region"
          onChange={handleChange}
          placeholder="Enter League Region"
        ></input>
        <br />
        <label>Prize: </label>
        <input
          type="text"
          name="prize"
          onChange={handleChange}
          placeholder="Enter League Prize"
        ></input>
        <br />
        <label>League Type: </label>
        <input
          type="text"
          name="leagueType"
          onChange={handleChange}
          placeholder="Enter League Type"
        ></input>
        <br />

        <button onClick={() => leagueStore.createLeague(newLeague)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default observer(CreateLeague);
