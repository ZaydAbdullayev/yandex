import React, { memo } from "react";
import "./cart.css";

import { BsBagCheckFill } from "react-icons/bs";

export const Cart = memo(() => {
  return (
    <div className="cart_box">
      <div className="cart_show_product">
        <div>
          <p>Savat</p>
          <button>tozalash</button>
        </div>
      </div>
      <div className="cart_delivery">
        <span>
          <BsBagCheckFill />
        </span>
        <p>Kamida 10000 so'mdan boshlab bepul yetkazib berish hizmati</p>
      </div>
    </div>
  );
});
