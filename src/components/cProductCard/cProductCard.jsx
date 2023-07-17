import React, { useState, useEffect } from "react";
import "./cProductCard.css";
import { NumericFormat } from "react-number-format";
import { ApiService } from "../../services/api.service";
import { ApiGetService } from "../../services/api.service";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { acUpdateCard } from "../../redux/cart";

export const CatalogCard = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [cart, setCart] = useState([]);
  const updateCard = useSelector((state) => state.updateCard);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiGetService.fetching("get/products")
      .then((res) => {
        setProduct(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    ApiGetService.fetching("cart/get/products")
      .then((res) => {
        setCart(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateCard]);

  const addCart = (item) => {
    ApiService.fetching("add/toCart", item)
      .then((res) => {
        console.log(res);
        const msg = "Mahsulot savatga muvoffaqiyatli qo'shildi !!!";
        enqueueSnackbar(msg, { variant: "success" });
        dispatch(acUpdateCard());
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
                <span>{item?.description || ""}</span>
              </div>
              <button>
                <span style={count ? {} : { display: "none" }}>-</span>{" "}
                {count ? count : "Qo'shish"}{" "}
                <span onClick={() => addCart({ ...item, quantity: -1 })}>
                  +
                </span>
              </button>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};
