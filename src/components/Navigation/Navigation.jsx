import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="navbar z-40 top-0 left-0 fixed shadow-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Training
          </Link>
        </div>
        <div className="flex items-center">
          <NavLink active="active" to="/" className="btn btn-ghost normal-case text-md">
            Home
          </NavLink>
          <NavLink active="active" to="/courses" className="btn btn-ghost normal-case text-md">
            Courses
          </NavLink>
          <NavLink active="active" to="/blogs" className="btn btn-ghost normal-case text-md">
            Blogs
          </NavLink>
          <NavLink active="active" to="/faqs" className="btn btn-ghost normal-case text-md">
            FAQS
          </NavLink>
          <NavLink active="active" to="/about" className="btn btn-ghost normal-case text-md" id="SDA">
            About
          </NavLink>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
};

export default Navigation;
