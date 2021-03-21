import axios from "axios";
import { makeAutoObservable } from "mobx";
import React from "react";

class ClubStore {
  clubs = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchClubs = async () => {
    try {
      const response = await axios.get("http://localhost:9000/clubs");
      this.clubs = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createClub = async (newClub) => {
    try {
      const response = await axios.post("http://localhost:9000/clubs", newClub);
      this.clubs.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteClub = async (clubId) => {
    try {
      await axios.delete(`http://localhost:9000/clubs/:${clubId}`);
      this.clubs = this.clubs.filter((club) => club.id !== +clubId);
    } catch (error) {
      console.log(error);
    }
  };

  updateClub = async (updatedClub) => {
    try {
      await axios.put(
        `http://localhost:9000/clubs/:${updatedClub.id}`,
        updatedClub
      );
      const club = this.clubs.find((club) => club.id === updatedClub.id);
      for (const key in club) {
        club[key] = updatedClub[key];
      }
    } catch (error) {
      console.log(error);
    }
  };
}
const clubStore = new ClubStore();
clubStore.fetchClubs();

export default clubStore;
