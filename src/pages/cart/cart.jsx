import React, { memo, useState, useEffect } from "react";
import "./cart.css";
import { ApiGetService } from "../../services/api.service";

import { BsBagCheckFill } from "react-icons/bs";
import empty from "../../components/assets/images/empty-cart.gif";

export const Cart = memo(() => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    ApiGetService.fetching("cart/get/products")
      .then((res) => {
        setCart(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const countINC = () => {
    setCount(count + 1);
  };

  const countDEC = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="cart_box">
      <div className="cart_show_product">
        <div>
          <p>Savat</p>
          <button>tozalash</button>
        </div>

        {/* =========== Cart body section ======= */}
        <div className="cart_body">
          <div className="cart_body_box last">
            {cart.map((item) => {
              return (
                <div className="cart_body__item" key={item.id}>
                  <img src={item.img} alt="product_photo" />
                  <div className="item_info__box">
                    <div className="info">
                      <p style={{ lineHeight: "1.5" }}>{item.name}</p>
                      <span>{item.description}</span>
                      <p>
                        {item.price} <span>• 0g</span>
                      </p>
                    </div>
                    <div className="count_box">
                      <button onClick={countDEC}>-</button>
                      <span>{item.quontity || count}</span>
                      <button onClick={countINC}>+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {cart.length ? (
            <div
              className="service_price"
              style={
                cart.length === 1 ? {} : { borderTop: "1px solid #3333334b" }
              }
            >
              <p>Xizmat ishi:</p>
              <span>5 000 sum</span>
            </div>
          ) : (
            <figure className="empty_cart">
              <p style={{ fontSize: "var(--fs5)", textAlign: "center" }}>
                Savat bo'sh
              </p>
              <img src={empty} alt="empty_gif" />
            </figure>
          )}
        </div>
      </div>

      {/* =========== delivery section ============ */}
      <div className="cart_delivery">
        <span>
          <BsBagCheckFill />
        </span>
        <p>Kamida 10000 so'mdan boshlab bepul yetkazib berish hizmati</p>
      </div>
    </div>
  );
});
