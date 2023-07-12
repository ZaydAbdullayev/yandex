import React, { useState, useEffect } from "react";
import "./cProductCard.css";
import { NumericFormat } from "react-number-format";
import { ApiService } from "../../services/api.service";
import { ApiGetService } from "../../services/api.service";
import { useSnackbar } from "notistack";

export const CatalogCard = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    ApiGetService.fetching("get/products")
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addCart = (item) => {
    ApiService.fetching("add/toCart", item)
      .then((res) => {
        console.log(res);
        const msg = "Mahsulot savatga muvoffaqiyatli qo'shildi !!!";
        enqueueSnackbar(msg, { variant: "success" });
        const cart = product?.find((id) => id === item.id);
        console.log(cart);
        if (cart) {
          setCount(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {product?.map((item) => {
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
              <button onClick={() => addCart({ ...item, quantity: 1 })}>
                <span style={count ? {} : { display: "none" }}>-</span>{" "}
                {count ? item.quantity : "Qo'shish"} <span>+</span>
              </button>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};
