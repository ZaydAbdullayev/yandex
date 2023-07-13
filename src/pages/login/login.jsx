import React, { useState } from "react";
import "./login.css";
import { PatternFormat } from "react-number-format";
import { acLogin, acLogout } from "../../redux/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

export const Signin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [err, setErr] = useState(false);
  const [pass, setPass] = useState({});
  const { pass1, pass2 } = pass;

  const handleShow = () => {
    setShow(!show);
  };

  const closeModal = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
  };

  return (
    <div className="login_container">
      <div className="login">
        <h1>Foodify</h1>
        <div className="login_header">
          <NavLink to="/signin" className="btn">
            Ro'yxatdan o'tish
          </NavLink>
          <NavLink to="/login" className="btn">
            Hisobga kirish
          </NavLink>
        </div>
        <form className="login_body" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Foydalanuvchi ismi"
            required
            autoComplete="off"
            autoCapitalize="off"
            style={err ? { border: "2px solid tomato" } : {}}
          />
          <PatternFormat
            format="+998 ## ### ## ##"
            allowEmptyFormatting
            required
            name="phone"
            mask="_"
            style={err ? { border: "2px solid tomato" } : {}}
          />
          <label>
            <input
              type={show ? "password" : "text"}
              name="password"
              placeholder="Parol kiriting"
              required
              autoComplete="off"
              id="fpass"
              style={err ? { border: "2px solid tomato" } : {}}
              onChange={(e) => setPass({ ...pass, pass1: e.target.value })}
            />
            <span onClick={handleShow} style={show ? {} : { color: "orange" }}>
              {show ? <BsEyeSlash /> : <BsEye />}
            </span>
          </label>
          <label>
            <input
              type={show ? "password" : "text"}
              name="password"
              placeholder="Parolni takrorlang"
              required
              autoComplete="off"
              id="spass"
              style={
                err || pass1 !== pass2
                  ? { border: "2px solid tomato", color: "tomato" }
                  : {}
              }
              onChange={(e) => setPass({ ...pass, pass2: e.target.value })}
            />
            <span onClick={handleShow} style={show ? {} : { color: "orange" }}>
              {show ? <BsEyeSlash /> : <BsEye />}
            </span>
            {/* <p style={err ? { display: "flex" } : {}} className="failed">
              Foydalanuvchi yoki parol xaroligi...!
            </p> */}
          </label>
          <button>Yuborish</button>
          <span>© 2023 Foodify</span>
          <i className="close" type="button" onClick={closeModal}>
            <IoIosCloseCircle />
          </i>
        </form>
      </div>
      <div className="baground" onClick={closeModal}>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [err, setErr] = useState(false);
  const [pass, setPass] = useState(null);
  const { pass1, pass2 } = pass;

  const handleShow = () => {
    setShow(!show);
  };

  const closeModal = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
  };

  return (
    <div className="login_container">
      <div className="login">
        <h1>Foodify</h1>
        <div className="login_header">
          <NavLink to="/signin" className="btn">
            Ro'yxatdan o'tish
          </NavLink>
          <NavLink to="/login" className="btn">
            Hisobga kirish
          </NavLink>
        </div>
        <form className="login_body" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Foydalanuvchi ismi"
            required
            autoComplete="off"
            autoCapitalize="off"
            style={err ? { border: "2px solid tomato" } : {}}
          />
          <PatternFormat
            format="+998 ## ### ## ##"
            allowEmptyFormatting
            required
            name="phone"
            mask="_"
            style={err ? { border: "2px solid tomato" } : {}}
          />
          <label>
            <input
              type={show ? "password" : "text"}
              name="password"
              placeholder="Parol kiriting"
              required
              autoComplete="off"
              id="fpass"
              style={err ? { border: "2px solid tomato" } : {}}
              onChange={(e) => setPass({ ...pass, pass1: e.target.value })}
            />
            <span onClick={handleShow} style={show ? {} : { color: "orange" }}>
              {show ? <BsEyeSlash /> : <BsEye />}
            </span>
          </label>
          <label>
            <input
              type={show ? "password" : "text"}
              name="password"
              placeholder="Parolni takrorlang"
              required
              autoComplete="off"
              id="spass"
              style={
                err || pass1 !== pass2
                  ? { border: "2px solid tomato", color: "tomato" }
                  : {}
              }
              onChange={(e) => setPass({ ...pass, pass2: e.target.value })}
            />
            <span onClick={handleShow} style={show ? {} : { color: "orange" }}>
              {show ? <BsEyeSlash /> : <BsEye />}
            </span>
            {/* <p style={err ? { display: "flex" } : {}} className="failed">
              Foydalanuvchi yoki parol xaroligi...!
            </p> */}
          </label>
          <button>Yuborish</button>
          <span>© 2023 Foodify</span>
          <i className="close" type="button" onClick={closeModal}>
            <IoIosCloseCircle />
          </i>
        </form>
      </div>
      <div className="baground" onClick={closeModal}>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};
