import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acOpenMadal } from "../../redux/modal";

import { IoMdPin } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import default_img from "../assets/images/default-img.png";

export const Navbar = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = JSON.parse(localStorage.getItem("customer")) || [];

  const log_in = () => {
    navigate("/signin");
  };

  const openModal = () => {
    dispatch(acOpenMadal());
  };

  return (
    <div className="navbar_box">
      <div className={location === "/" ? "navbar" : "catalog_navbar"}>
        <div className="left_nav">
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
          <NumericFormat
            value="13000"
            suffix="sum"
            thousandSeparator=","
            displayType="text"
          />
        </div>
        {login.user !== [] ? (
          <figure onClick={openModal} className="user_img">
            <img src={default_img} alt="user_photo" />
          </figure>
        ) : (
          <button className="login_btn" type="button" onClick={log_in}>
            login
          </button>
        )}
      </div>
    </div>
  );
};
