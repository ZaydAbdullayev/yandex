import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import { IoMdPin } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="navbar_box">
      <div className="navbar">
        <div>
          <Link to="/">Yandex@Eat</Link>
          <form className="search_box">
            <span className="icon">
              <BiSearch />
            </span>
            <input
              type="search"
              required
              name="search"
              placeholder="Restoran, Taom yoki mahsulot"
            />
            <button>Topish</button>
          </form>
          <label className="location">
            <span className="icon">
              <IoMdPin />
            </span>
            <select name="location">
              <option value="boburshox">Boburshox</option>
            </select>
          </label>
        </div>
        <label className="language">
          <span className="icon">
            <BsGlobe2 />
          </span>
          <select name="languge">
            <option value="en">English</option>
          </select>
        </label>
        <div className="card">
          <span className="icon">
            <IoFastFoodSharp />
          </span>
          <p>13000 sum</p>
        </div>
        <button className="login_btn">Login</button>
      </div>
    </div>
  );
};
