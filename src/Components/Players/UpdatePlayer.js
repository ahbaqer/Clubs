import playerStore from "../../Stores/PlayerStore";
import { observer } from "mobx-react";
import { Link, useParams } from "react-router-dom";
import { useImperativeHandle, useState } from "react";
const UpdatePlayer = () => {
  const { id } = useParams();
  const updatedPlayer = playerStore.players.find((player) => player.id === +id);
  const [player, setUpdatedPlayer] = useState(updatedPlayer);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  const handleChange = (event) => {
    setUpdatedPlayer({ ...player, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Update Player Page</h1>
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

        <button onClick={() => playerStore.updatePlayer(player)}>Submit</button>
      </div>
    </form>
  );
};

export default observer(UpdatePlayer);
