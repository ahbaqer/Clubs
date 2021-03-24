import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand-md bg-dark">
      <div>
        <ul class="nav navbar-nav flex-grow-1 justify-content-between">
          <li class="nav-item" role="presentation">
            <a class="nav-link" href="#"></a>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/">
              <a class="nav-link" href="#">
                Home
              </a>
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/clubs">
              <a class="nav-link" href="#">
                Clubs
              </a>
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/players">
              <a class="nav-link" href="#">
                Players
              </a>
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/leagues">
              <a class="nav-link" href="#">
                Leagues
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
