import React, { memo, useState, useEffect } from "react";
import "./cart.css";
import { ApiGetService } from "../../services/api.service";
import { NumericFormat } from "react-number-format";
import { CalculateTotalPrice } from "../../services/calc.service";
import { useSelector, useDispatch } from "react-redux";
import { ApiUpdateService, ApiDeleteService } from "../../services/api.service";
import { acUpdateCard } from "../../redux/cart";
import { useNavigate } from "react-router-dom";

import empty from "../../components/assets/images/empty-cart.gif";
import { BsTaxiFrontFill, BsTaxiFront, BsInfoCircle } from "react-icons/bs";

export const Cart = memo(() => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const updateCard = useSelector((state) => state.updateCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user_id = user?.users?.id;

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

  const payment = (data) => {
    console.log(data);
    navigate("/payment");
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
                <div className="cart_body__item" key={item.name}>
                  <img src={item.img} alt="product_photo" />
                  <div className="item_info__box">
                    <div className="info">
                      <p style={{ lineHeight: "1.5" }}>{item.name}</p>
                      <span>{item.description}</span>
                      <p>{item.price}</p>
                    </div>
                    <div className="count_box">
                      <button
                        onClick={() =>
                          updateCart({
                            quantity: item.quantity - 1,
                            id: item.id,
                          })
                        }
                      >
                        -
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
          <button onClick={() => payment({ data: cart })}>
            Jami to'lov:{" "}
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
