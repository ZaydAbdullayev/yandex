import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="product">
      <div className="product_item">
        <span>
          <button type="button">X</button>
        </span>
        <div>
          <button>A</button>
          <p>Log in with Yandex ID</p>
        </div>
        <form>
          <span>
            <button>Mail</button>
            <button>Phone navbar</button>
          </span>
          <input
            type="text"
            placeholder="Username or email"
            required
            minLength={4}
          />
          <button>i forgot</button>
          <input type="button" value="Log in" />
          <div>
            {" "}
            <button type="button">Create ID</button>
          </div>
          <p>Login With</p>
          <footer className="footer">
            <button type="button">💦</button>
            <button type="button">💦</button>
            <button type="button">💦</button>
          </footer>
        </form>
      </div>
    </div>
  );
};
