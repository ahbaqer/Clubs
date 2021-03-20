import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/clubs">
          <a>Clubs</a>
        </Link>
        <Link to="/players">
          <a>Players</a>
        </Link>
        <Link to="/leagues">
          <a>Leagues</a>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
