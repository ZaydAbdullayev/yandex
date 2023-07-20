import React, { useState, useEffect, Fragment } from "react";
import "./cProductCard.css";
import { NumericFormat } from "react-number-format";
import {
  ApiService,
  ApiUpdateService,
  ApiGetService,
  ApiDeleteService,
} from "../../services/api.service";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { acUpdateCard } from "../../redux/cart";
import { useParams } from "react-router";

export const CatalogCard = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const updateCard = useSelector((state) => state.updateCard);
  const dispatch = useDispatch();
  const id = useParams().id;
  const { enqueueSnackbar } = useSnackbar();

  const user_id = user?.users?.id;

  useEffect(() => {
    ApiGetService.fetching("get/products")
      .then((res) => {
        setProduct(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, [updateCard]);

  useEffect(() => {
    ApiGetService.fetching("cart/get/products")
      .then((res) => {
        setCart(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateCard]);

  const addToCart = (item) => {
    console.log(item);
    ApiService.fetching("add/toCart", item)
      .then((res) => {
        const msg = "Mahsulot savatga muvoffaqiyatli qo'shildi!";
        enqueueSnackbar(msg, { variant: "success" });
        dispatch(acUpdateCard());
      })
      .catch((err) => console.log(err));
  };

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

  const filtered = product.filter((item) => {
    return item?.restaurant?.toLowerCase().includes(id.toLowerCase());
  });

  return (
    <>
      {filtered?.map((item) => {
        const existingCartItem = cart?.find(
          (cartItem) => cartItem.id === item.id
        );
        const quantity = existingCartItem
          ? existingCartItem.quantity
          : "Qo'shish";

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
              <div className="btn_box">
                {quantity > 0 && (
                  <span
                    onClick={() =>
                      updateCart({ quantity: quantity - 1, id: item.id })
                    }
                  >
                    -
                  </span>
                )}
                <button
                  onClick={() =>
                    addToCart({
                      ...item,
                      quantity: 1,
                      user_id: user_id,
                    })
                  }
                >
                  {quantity > 0 ? quantity : "Qo'shish"}{" "}
                </button>
                <span
                  onClick={() =>
                    updateCart({ quantity: quantity + 1, id: item.id })
                  }
                >
                  +
                </span>
              </div>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};
