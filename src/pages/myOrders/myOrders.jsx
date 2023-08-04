import React, { useEffect, useState } from "react";
import "./myOrders.css";
import { ApiGetService } from "../../services/api.service";
import { NumericFormat } from "react-number-format";

import { BsFillCartCheckFill, BsFillHouseCheckFill } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import img from "../../components/assets/images/baground.jpg";

export const MyOrders = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const id = user?.users?.id;

  useEffect(() => {
    ApiGetService.fetching(`get/myOrders/${id}`)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="my_orders">
      <p>Mening Buyurtmalarim</p>
      <div className="orders_item">
        <div className="order_info">
          <span>Buyurtma IDsi №: 345676</span>
          <label>
            Buyurtmani bekor qilish uchun: <button>Bekor qilish</button>
          </label>
        </div>
        <div className="orders_stution">
          <span>
            <BsFillCartCheckFill style={{ color: "#38b000" }} />
            {/* <span>Buyurtmangiz qabul qilinishi kutilmoqda...</span> */}
          </span>{" "}
          <p style={{ background: "#38b000" }}></p>{" "}
          <span>
            <LuChefHat />
          </span>{" "}
          <p></p>{" "}
          <span>
            <TbTruckDelivery />
          </span>{" "}
          <p></p>{" "}
          <span>
            <BsFillHouseCheckFill />
          </span>
        </div>
        <div className="order_body">
          <figure className="order_body__item">
            <img src={img} alt="" />
            <figcaption>
              <pre>
                <p>name</p>
                <span>description</span>
              </pre>
              <span>4 ta</span>
              <NumericFormat
                value={987678}
                displayType="text"
                thousandSeparator=" "
                suffix=" so'm"
              />
            </figcaption>
          </figure>
          <div>
            <p>
              Jami to'lov:{" "}
              <NumericFormat
                value={987678}
                displayType="text"
                thousandSeparator=" "
                suffix=" so'm"
              />
            </p>
            <b>2023-08-04 / 06:45:54</b>
          </div>
        </div>
      </div>
    </div>
  );
};
