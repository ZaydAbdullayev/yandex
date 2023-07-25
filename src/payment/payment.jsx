import React, { useState, useEffect } from "react";
import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ApiGetService,
  ApiUpdateService,
  ApiDeleteService,
  ApiService,
} from "../services/api.service";
import { CalculateTotalPrice } from "../services/calc.service";
import { acUpdateCard } from "../redux/cart";
import { NumericFormat } from "react-number-format";

import { SiHomeadvisor } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import humo from "../components/assets/images/humo.jpg";
import visa from "../components/assets/images/Visa_Inc.-Logo.wine.png";
import click from "../components/assets/images/Click-01.png";
import mastercard from "../components/assets/images/Mastercard-Logo.wine.png";
import uzum from "../components/assets/images/UZUM_BANK-01.png";
import payme from "../components/assets/images/payme-01.png";
import uzcard from "../components/assets/images/Uzcard_Logo-700x367.png";

export const Payment = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const updateCard = useSelector((state) => state.updateCard);
  const [write, setWrite] = useState(false);
  const [adress_info, setAdress_info] = useState([]);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const user_id = user?.users?.id;

  const productInfo = cart?.map(({ id, quantity }) => `${quantity}_${id}`);

  const payment_data = JSON.stringify({
    address: adress_info,
    product_data: productInfo,
    payment: "token",
    price: total,
    user_id: user_id,
    user_location: {
      latitude: "4567584985784938574934857",
      longitude: "4567584985784938574934857",
    },
  });
  console.log(payment_data);

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

  const handlePayment = () => {
    ApiService.fetching("receive/order", payment_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="payment_box">
      <h1>Restaurant name</h1>
      <div className="rigth_section">
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
            <SiHomeadvisor style={{ fontSize: "var(--fs4)", color: "#333" }} />
            <select name="location">
              <option value="value">Namangan</option>
            </select>
          </div>
          <label>
            <p>Uy/Ofis</p>
            <input
              type="text"
              required
              autoComplete="off"
              onChange={(e) =>
                setAdress_info({ ...adress_info, home: e.target.value })
              }
            />
          </label>
          <label>
            <p>Podyez №:</p>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setAdress_info({ ...adress_info, padez: e.target.value })
              }
            />
          </label>
          <label>
            <p>Qavat №:</p>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setAdress_info({ ...adress_info, qavat: e.target.value })
              }
            />
          </label>
          <label>
            <p>buyurtma uchun izoh</p>
            <input
              type="text"
              autoComplete="off"
              onChange={(e) =>
                setAdress_info({
                  ...adress_info,
                  description: e.target.value,
                })
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
      <div className="left_section">
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
      <div className="payment_postcard">
        <div className="payment_header">
          <div
            className={active === 1 ? "payment_item active" : "payment_item"}
            onClick={() => setActive(1)}
          >
            <img src={humo} alt="bank" />
            <img src={uzcard} alt="bank" />
            <p>Sum cards (0%)</p>
          </div>
          <div
            className={active === 2 ? "payment_item active" : "payment_item"}
            onClick={() => setActive(2)}
          >
            <img src={visa} alt="bank" />
            <img src={mastercard} alt="bank" />
            <p>Sum cards (0%)</p>
          </div>
          <div
            className={active === 3 ? "payment_item active" : "payment_item"}
            onClick={() => setActive(3)}
          >
            <img src={payme} alt="bank" />
            <img src={click} alt="bank" />
            <img src={uzum} alt="bank" />
            <p>Sum cards (0%)</p>
          </div>
        </div>

        {active === 1 ? (
          <form className="payment_body1">
            <div className="add_card">ADD card +</div>
            <div className="card_item">
              <input
                type="number"
                maxLength="16"
                name="card_name"
                required
                autoComplete="off"
              />
              <input
                type="number"
                maxLength="4"
                name="card_month"
                required
                autoComplete="off"
              />
            </div>
            <button>To'lash</button>
          </form>
        ) : active === 2 ? (
          ""
        ) : (
          <div className="payment_body2">
            <figure className="app_item">
              <img src={click} alt="bank" />
              <p>(comission 0%)</p>
            </figure>
            <figure className="app_item">
              <img src={payme} alt="bank" />
              <p>(comission 0%)</p>
            </figure>
            <figure className="app_item">
              <img src={uzum} alt="bank" />
              <p>(comission 0%)</p>
            </figure>
            <figure className="app_item">
              <img src={click} alt="bank" />
              <p>(comission 0%)</p>
            </figure>
          </div>
        )}
      </div>
      <button onClick={handlePayment}>Tolash</button>
    </div>
  );
};
