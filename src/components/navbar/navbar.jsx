import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { NumericFormat } from "react-number-format";

import { IoMdPin } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <div className="navbar_box">
      <div className={location === "/" ? "navbar" : "catalog_navbar"}>
        <div className="left_nav">
        <Link to="/catalog">Yandex@Eat</Link>
          <Link to="/add-product">Add_product</Link>
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
          <NumericFormat
            value="13000"
            suffix="sum"
            thousandSeparator=","
            displayType="text"
          />
        </div>
        <button className="login_btn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
