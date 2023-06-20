import React, { memo } from "react";
import "./productMenu.css";

export function ProductMenu(props) {
  return (
    <div className="food_menu">
      <h1>Menyu</h1>

      <ul>{props.children}</ul>
    </div>
  );
}

export default memo(ProductMenu);
