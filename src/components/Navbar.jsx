import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.sass';

export const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-li">
        <NavLink to="/hw1" activeClassName="active">
          hw#1
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw2" activeClassName="active">
          hw#2
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw3" activeClassName="active">
          hw#3
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw4" activeClassName="active">
          hw#4
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw6" activeClassName="active">
          hw#6
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw7" activeClassName="active">
          hw#7
        </NavLink>
      </div>
      <div className="nav-li">
        <NavLink to="/hw9" activeClassName="active">
          hw#9
        </NavLink>
      </div>
    </nav>
  );
};
