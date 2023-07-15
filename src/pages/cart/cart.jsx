import React, { memo, useState, useEffect } from "react";
import "./cart.css";
import { ApiGetService } from "../../services/api.service";
import { NumericFormat } from "react-number-format";
import { CalculateTotalPrice } from "../../services/calc.service";

import empty from "../../components/assets/images/empty-cart.gif";
import { BsTaxiFrontFill, BsTaxiFront, BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Cart = memo(() => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const updateCard = useSelector((state) => state.updateCard);

  useEffect(() => {
    ApiGetService.fetching("cart/get/products")
      .then((res) => {
        setCart(res?.data?.data);
        const total_price = CalculateTotalPrice(res?.data?.data);
        setTotal(total_price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateCard]);

  const countINC = (id) => {
    setCount(count + 1);
  };

  const countDEC = (id) => {
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
            {cart?.map((item) => {
              return (
                <div className="cart_body__item" key={item.product_id}>
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
                      <button onClick={() => countDEC(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => countINC(item.id)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {cart?.length ? (
            <div
              className="service_price"
              style={
                cart?.length === 1 ? {} : { borderTop: "1px solid #3333334b" }
              }
            >
              <p>Xizmat xaqi:</p>
              <span>5 000 sum</span>
            </div>
          ) : (
            <figure className="empty_cart">
              <p style={{ fontSize: "var(--fs5)", textAlign: "center" }}>
                Hozircha savatingiz bo'sh
              </p>
              <img src={empty} alt="empty_gif" />
            </figure>
          )}
        </div>
      </div>

      {/* =========== delivery section ============ */}
      {!cart?.length ? (
        <div className="cart_delivery">
          <span>
            <BsTaxiFrontFill />
          </span>
          <p>Kamida 10 000 so'mdan boshlab bepul yetkazib berish hizmati</p>
        </div>
      ) : (
        <div className="cart_delivery">
          <label>
            <p>
              <span>
                <BsTaxiFront />
              </span>
              Yetkazib berish 0sum
            </p>
            <BsInfoCircle />
          </label>
          <button>
            Jami To'lov:{" "}
            <NumericFormat
              value={total}
              suffix=" sum"
              thousandSeparator=" "
              displayType="text"
            />
          </button>
        </div>
      )}
    </div>
  );
});
