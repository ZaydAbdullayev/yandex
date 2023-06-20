import React from "react";
import "./cProductCard.css";
import { NumericFormat } from "react-number-format";

import foto from "../assets/images/assortment-spanish-pintxos.jpg";
import foto1 from "../assets/images/delicious-food-black-board (1).jpg";
import foto2 from "../assets/images/delicious-food-black-board.jpg";
import foto3 from "../assets/images/flat-lay-notepad-with-plate-delicious-kebab-ketchup.jpg";
import foto4 from "../assets/images/hot-sushi-rolls-served-leaves-wood-board-white-background.jpg";

export const CatalogCard = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <figure className="catalog_product" key={item.id}>
            <img src={item.img} alt="images" />
            <figcaption className="product_info">
              <div>
                <NumericFormat
                  value={item.price}
                  suffix=" sum"
                  thousandSeparator=" "
                  displayType="text"
                />
                <span>{item.name}</span>
                <span>{item.description}</span>
              </div>
              <button>
                <span>+</span> Qo'shish
              </button>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};

const data = [
  {
    id: "dfghfds",
    img: foto,
    price: "40 000",
    name: "Shashlik",
    description: "juda mazali",
  },
  {
    id: "dfggfdh",
    img: foto1,
    price: "40 000",
    name: "Shashlik",
    description: "juda mazali",
  },
  {
    id: "dwerfc",
    img: foto2,
    price: "40 000",
    name: "Shashlik",
    description: "juda mazali",
  },
  {
    id: "dffsdbs",
    img: foto3,
    price: "40 000",
    name: "Shashlik",
    description: "juda mazali",
  },
  {
    id: "ssdfrs",
    img: foto4,
    price: "40 000",
    name: "Shashlik",
    description: "juda mazali",
  },
];
