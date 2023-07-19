import React, { useState, useEffect } from "react";
import "./cProductCard.css";
import { NumericFormat } from "react-number-format";
import { ApiService } from "../../services/api.service";
import { ApiGetService } from "../../services/api.service";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { acUpdateCard } from "../../redux/cart";
import { useParams } from "react-router";

export const CatalogCard = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [cart, setCart] = useState([]);
  const updateCard = useSelector((state) => state.updateCard);
  const dispatch = useDispatch();
  const id = useParams().id;

  console.log(id);

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
    console.log(item);
    ApiService.fetching("add/toCart", item)
      .then((res) => {
        console.log(res);
        const msg = "Mahsulot savatga muvoffaqiyatli qo'shildi !!!";
        enqueueSnackbar(msg, { variant: "success" });
        dispatch(acUpdateCard());
      })
      .catch((err) => console.log(err));
  };

  const filtered = product.filter((item) => {
    return item?.restaurant?.toLowerCase().includes(id.toLowerCase());
  });

  return (
    <>
      {filtered?.map((item) => {
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
                <span style={{ textTransform: "capitalize" }}>{item.name}</span>
                <span>{item?.description || ""}</span>
              </div>
              <button>
                <span style={count ? {} : { display: "none" }}>-</span>{" "}
                {count ? count : "Qo'shish"}
                <span
                  onClick={
                    count
                      ? () =>
                          addCart({
                            ...item,
                            quantity: 1,
                            user_id: user?.users?.id,
                          })
                      : () =>
                          addCart({
                            ...item,
                            quantity: 1,
                            user_id: user?.users?.id,
                          })
                  }
                >
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
