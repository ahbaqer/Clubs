import playerStore from "../../Stores/PlayerStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useImperativeHandle, useState } from "react";
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
        <h1>Create Player Page</h1>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter Player Name"
        ></input>
        <br />
        <label>Position:</label>
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Enter Player Position"
        ></input>
        <br />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Enter Player Age"
        ></input>
        <br />
        <label>Club:</label>
        <input
          type="text"
          name="club"
          onChange={handleChange}
          placeholder="Enter Player's Club Name"
        ></input>
        <br />

        <button onClick={() => playerStore.createPlayer(newPlayer)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default observer(CreatePlayer);
