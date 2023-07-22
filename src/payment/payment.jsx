import React, { useState } from "react";
import "./payment.css";

export const Payment = () => {
  const [write, setWrite] = useState(0); 

  const toWrite = (item) => {
    setWrite(item); 
  };

  return (
    <div className="payment_box">
      <h1>Restaurant name</h1>
      <div className="rigth_section">
        <div className="delivery_sharts">
          <p>Yetakazish shartlari</p>
          <div className="whose_order">
            <button type="button" autoFocus>
              Yetkazish <span>summasi</span>
            </button>
            <button type="button">
              Boshqa odam uchun buyurtma <span>summasi</span>
            </button>
          </div>
          <form
            className={
              write === 1 ? "place_information write" : "place_information"
            }
          >
            <div className="user_location">
              <select name="location">
                <option value="value">Namangan</option>
              </select>
            </div>
            <label onClick={() => toWrite(1)}>
              <p>Uy/Ofis</p>
              <input
                type="text"
                maxLength="5"
                autoComplete="off"
                name="adress"
              />
            </label>
            <label>
              <p>Podyez №:</p>
              <input type="text" autoComplete="off" name="padez" />
            </label>
            <label>
              <p>Qavat №:</p>
              <input type="text" autoComplete="off" name="qavat" />
            </label>
            <label>
              <p>buyurtma uchun izoh</p>
              <input type="text" autoComplete="off" name="description" />
            </label>
          </form>
          <div className="delivery_time">
            <p>Yetkazib berish vaqti</p>
            <select name="time">
              <option value="time">Yetkazish: 20-30 daqiqa</option>{" "}
              <option value="dhdsf">Bugun: 20-30 daqiqa</option>
            </select>
          </div>
        </div>
        <div className="your_orders"></div>
      </div>
      <div className="left_section"></div>
    </div>
  );
};
