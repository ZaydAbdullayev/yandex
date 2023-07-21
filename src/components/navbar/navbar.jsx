import React, { useEffect, useState } from "react";
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
import { FiArrowLeft } from "react-icons/fi";

export const Navbar = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("customer")) || []);
  }, []);

  const log_in = () => {
    navigate("/signin");
  };

  const openModal = () => {
    dispatch(acOpenMadal());
  };

  return (
    <div className="navbar_box">
      <div
        className={
          location === "/"
            ? "navbar"
            : location !== "/payment"
            ? "catalog_navbar"
            : "payment_navbar"
        }
      >
        <span style={location !== "/payment" ? { display: "none" } : {}}>
          <FiArrowLeft /> Orqaga
        </span>
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
            <button type="submit">Topish</button>
          </form>
          <label className="location">
            <span className="icon">
              <IoMdPin />
            </span>
            <select name="location">
              <option value="boburshox">Boburshox</option>
              {/* Diğer seçenekler eklenebilir */}
            </select>
          </label>
        </div>
        <label className="language">
          <span className="icon">
            <BsGlobe2 />
          </span>
          <select name="language">
            <option value="en">English</option>
            {/* Diğer diller eklenebilir */}
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
        {!user.length ? (
          <figure onClick={openModal} className="user_img">
            <img src={default_img} alt="user_photo" />
          </figure>
        ) : (
          <button className="login_btn" type="button" onClick={log_in}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
