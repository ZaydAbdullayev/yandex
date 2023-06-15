import React from "react";
import "./cProductCard.css";

import foto from "../assets/images/assortment-spanish-pintxos.jpg";
import foto1 from "../assets/images/delicious-food-black-board (1).jpg";
import foto2 from "../assets/images/delicious-food-black-board.jpg";
import foto3 from "../assets/images/flat-lay-notepad-with-plate-delicious-kebab-ketchup.jpg";
import foto4 from "../assets/images/hot-sushi-rolls-served-leaves-wood-board-white-background.jpg";

export const CatalogCard = () => {
  return (
    <>
      <figure className="catalog_product">
        <img src={foto} alt="images" />
        <figcaption className="product_info">
          <div>
            <p>40 000 sum</p>
            <span>Shashlik</span>
            <span></span>
          </div>
          <button>
            <span>+</span> Qo'shish
          </button>
        </figcaption>
      </figure>
      <figure className="catalog_product">
        <img src={foto1} alt="images" />
        <figcaption className="product_info">
          <div>
            <p>40 000 sum</p>
            <span>Shashlik</span>
            <span></span>
          </div>
          <button>
            <span>+</span> Qo'shish
          </button>
        </figcaption>
      </figure>{" "}
      <figure className="catalog_product">
        <img src={foto2} alt="images" />
        <figcaption className="product_info">
          <div>
            <p>40 000 sum</p>
            <span>Shashlik</span>
            <span></span>
          </div>
          <button>
            <span>+</span> Qo'shish
          </button>
        </figcaption>
      </figure>{" "}
      <figure className="catalog_product">
        <img src={foto3} alt="images" />
        <figcaption className="product_info">
          <div>
            <p>40 000 sum</p>
            <span>Shashlik</span>
            <span></span>
          </div>
          <button>
            <span>+</span> Qo'shish
          </button>
        </figcaption>
      </figure>{" "}
      <figure className="catalog_product">
        <img src={foto4} alt="images" />
        <figcaption className="product_info">
          <div>
            <p>40 000 sum</p>
            <span>Shashlik</span>
            <span></span>
          </div>
          <button>
            <span>+</span> Qo'shish
          </button>
        </figcaption>
      </figure>
    </>
  );
};
