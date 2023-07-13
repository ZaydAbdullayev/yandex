import React, { memo } from "react";
import "./footer.css"

export const Footer = memo(() => {
    return (
      <div className="product-footer">
        <p>Even easier in the app</p>
        <div>
          <button>Apple</button>
          <button>Apple</button>
          <button>Apple</button>
        </div>
        <hr />
        <span>
          Contacts Delivery FAQ Become a partner Become a courier Eats for
          Business Plastic recycling Order food in the Yandex Go app Feedback
        </span>
        <hr />
        <span>
          <p>© 2018–2023 Yandex Eats LLC</p>
        </span>
      </div>
    );
})