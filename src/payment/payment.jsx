import React, { useState, useEffect } from "react";
import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ApiGetService,
  ApiUpdateService,
  ApiDeleteService,
} from "../services/api.service";
import { CalculateTotalPrice } from "../services/calc.service";
import { acUpdateCard } from "../redux/cart";
import { NumericFormat } from "react-number-format";

import { SiHomeadvisor } from "react-icons/si";
import { MdDelete } from "react-icons/md";

export const Payment = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const updateCard = useSelector((state) => state.updateCard);
  const [write, setWrite] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const user_id = user?.users?.id;

  useEffect(() => {
    ApiGetService.fetching(`cart/get/products/${user_id}`)
      .then((res) => {
        setCart(res?.data?.data);
        const total_price = CalculateTotalPrice(res?.data?.data);
        setTotal(total_price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateCard, user_id]);

  const updateCart = (item) => {
    if (item.quantity > 0) {
      ApiUpdateService.fetching(`update/cart/${user_id}/${item.id}`, item)
        .then((res) => {
          console.log(res);
          dispatch(acUpdateCard());
        })
        .catch((err) => console.log(err));
    } else {
      ApiDeleteService.fetching(`remove/cartItem/${user_id}/${item.id}`)
        .then((res) => {
          console.log(res);
          dispatch(acUpdateCard());
        })
        .catch((err) => console.log(err));
    }
  };

  const clearCart = () => {
    const confirm = window.confirm("Savatingiz tozalansinmi?");
    if (confirm) {
      ApiDeleteService.fetching(`empty/cart/${user_id}`)
        .then((res) => {
          console.log(res);
          dispatch(acUpdateCard());
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="payment_box">
      <h1>Restaurant name</h1>
      <div className="rigth_section">
        <div className="delivery_condition">
          <p>Yetakazish shartlari</p>
          <div className="whose_order">
            <button type="button" autoFocus>
              Yetkazish <span>summasi</span>
            </button>
            <button type="button">
              Boshqa odam uchun buyurtma <span>summasi</span>
            </button>
          </div>
          <div
            className={write ? "place_information write" : "place_information"}
            onClick={() => setWrite(true)}
          >
            <div className="user_location">
              <SiHomeadvisor
                style={{ fontSize: "var(--fs4)", color: "#333" }}
              />
              <select name="location">
                <option value="value">Namangan</option>
              </select>
            </div>
            <label>
              <p>Uy/Ofis</p>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setData({ ...data, adress: e.target.value })}
              />
            </label>
            <label>
              <p>Podyez №:</p>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setData({ ...data, padez: e.target.value })}
              />
            </label>
            <label>
              <p>Qavat №:</p>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setData({ ...data, qavat: e.target.value })}
              />
            </label>
            <label>
              <p>buyurtma uchun izoh</p>
              <input
                type="text"
                autoComplete="off"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </label>
          </div>
          <div className="delivery_time">
            <p>Yetkazib berish vaqti</p>
            <select name="time">
              <option value="time">Yetkazish: 20-30 daqiqa</option>{" "}
              <option value="dhdsf">Bugun: 20-30 daqiqa</option>
            </select>
          </div>
        </div>
      </div>
      <div className="left_section">
        <div className="your_orders">
          <p>
            Buyurtmangiz:{" "}
            <span onClick={clearCart}>
              <MdDelete />
            </span>
          </p>
          <div>
            {cart?.map((item) => {
              return (
                <div className="cart_body__item payment_body" key={item.name}>
                  <div className="payment_info_box">
                    <img src={item.img} alt="product_photo" />
                    <label>
                      <p
                        style={{
                          lineHeight: "1.5",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.name}
                      </p>
                      <span>{item.description}</span>
                    </label>
                  </div>
                  <div className="payment_count_box">
                    <button
                      onClick={() =>
                        updateCart({
                          quantity: item.quantity - 1,
                          id: item.id,
                        })
                      }
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCart({
                          quantity: item.quantity + 1,
                          id: item.id,
                        })
                      }
                    >
                      +
                    </button>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
            <p className="total_price">
              Jami to'lov:{" "}
              <NumericFormat
                displayType="text"
                value={total}
                suffix=" so'm"
                thousandSeparator=" "
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
