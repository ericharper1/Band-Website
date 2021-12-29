import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

export const Header = () => {
  return (
    <div>
      <div>
        <h1 className="title">GOOD.</h1>
      </div>

      <div className="nav">
        <div className="nav-links-list">
          <h3 className="nav-link">About</h3>
          <h3 className="nav-link">Music</h3>
          <h3 className="nav-link">Store</h3>
          <h3 className="nav-link">Contact</h3>
        </div>
      </div>
    </div>
  );
};
