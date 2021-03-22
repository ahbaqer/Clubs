import leagueStore from "../../Stores/LeagueStore";
import { useImperativeHandle, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react";

const UpdateLeague = () => {
  const { id } = useParams();
  const updatedLeague = leagueStore.leagues.find((league) => league.id === +id);
  const [league, setUpdatedLeague] = useState(updatedLeague);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setUpdatedLeague({ ...league, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Update League Page</h1>
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
        <button onClick={() => leagueStore.updateLeague(league)}>Submit</button>
      </div>
    </form>
  );
};

export default observer(UpdateLeague);
