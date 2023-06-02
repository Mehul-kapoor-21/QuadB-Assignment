import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary nav-container ">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">MOVIFY</NavLink>
          <form className="d-flex" role="search">
            
            <button className="btn btn-danger nav-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
