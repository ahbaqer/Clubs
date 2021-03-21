import axios from "axios";
import { makeAutoObservable } from "mobx";
import React from "react";

class PlayerStore {
  players = [];
  constructor() {
    makeAutoObservable();
  }

  fetchPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:9000/players");
      this.players = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createPlayer = async (newPlayer) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/players",
        newPlayer
      );
      this.players.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deletePlayer = async (playerId) => {
    try {
      await axios.delete(`http://localhost:9000/players/:${playerId}`);
      this.players = this.players.filter((player) => player.id !== +playerId);
    } catch (error) {
      console.log(error);
    }
  };

  updatePlayer = async (updatedPlayer) => {
    try {
      await axios.put(
        `http://localhost:9000/players/:${updatedPlayer.id}`,
        updatedPlayer
      );
      const player = this.players.find(
        (player) => player.id === updatedPlayer.id
      );
      for (const key in player) {
        player[key] = updatedPlayer[key];
      }
    } catch (error) {
      console.log(error);
    }
  };
}
const playerStore = new PlayerStore();
playerStore.fetchPlayers();

export default playerStore;
