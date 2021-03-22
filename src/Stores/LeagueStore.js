import axios from "axios";
import { makeAutoObservable } from "mobx";
import React from "react";

class LeagueStore {
  leagues = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchLeagues = async () => {
    try {
      const response = await axios.get("http://localhost:9000/leagues");
      this.leagues = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createLeague = async (newLeague) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/leagues",
        newLeague
      );
      this.leagues.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteLeague = async (leagueId) => {
    try {
      await axios.delete(`http://localhost:9000/leagues/${leagueId}`);
      this.leagues = this.leagues.filter((league) => league.id !== +leagueId);
    } catch (error) {
      console.log(error);
    }
  };

  updateLeague = async (updatedLeague) => {
    try {
      await axios.put(
        `http://localhost:9000/leagues/${updatedLeague.id}`,
        updatedLeague
      );
      const league = this.leagues.find(
        (league) => league.id === updatedLeague.id
      );
      for (const key in league) {
        league[key] = updatedLeague[key];
      }
    } catch (error) {
      console.log(error);
    }
  };
}
const leagueStore = new LeagueStore();
leagueStore.fetchLeagues();

export default leagueStore;
