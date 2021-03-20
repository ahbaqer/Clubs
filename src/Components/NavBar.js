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
        <Link>
          <a>Players</a>
        </Link>
        <Link>
          <a>Leagues</a>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
