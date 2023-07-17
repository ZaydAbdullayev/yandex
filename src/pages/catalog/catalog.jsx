import React, { useState, useEffect } from "react";
import "./catalog.css";
import { CatalogCard } from "../../components/cProductCard/cProductCard";
import { ProductMenu } from "../../components/productMenu/productMenu";
import { Link, useParams } from "react-router-dom";
import { Cart } from "../cart/cart";

import main_img from "../../components/assets/images/fast_food2.jpg";
import {
  MdOutlineFavoriteBorder,
  MdOutlineAccessTimeFilled,
  MdFavorite,
} from "react-icons/md";
import { BsInfoCircle, BsFillStarFill } from "react-icons/bs";
import delivery from "../../components/assets/images//11146-NN5BIF.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { ApiGetService } from "../../services/api.service";

export const Catalog = () => {
  const [favorite, setFavorite] = useState(false);
  const [shop, setShop] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // ApiGetService.fetching(`catalog/${id}`).then((res) => {
    //   console.log(res);
    // });

    window.scrollTo(0, 0);
  }, [id]);

  const addToLike = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div className="catalog_box">
      <div className="catalog_page">
        {/* ========== filter the product ============== */}
        <div className="product_filter">
          <Link to="/">
            <FiArrowLeft /> Barcha restoranlar
          </Link>
          <ProductMenu>
            {menuData.map((item, index) => {
              return (
                <Link to={`/catalogq?=${item.query}`} key={index}>
                  {item.name}
                </Link>
              );
            })}
          </ProductMenu>
        </div>

        {/* =========== show product section ============= */}
        <div className="product_show">
          <figure className="about_restoran">
            <img src={main_img} alt="restotaunt_img" />
            <figcaption className="about_restoran_item">
              <span>
                <button className="restoran_btn" onClick={addToLike}>
                  {favorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                </button>
              </span>
              <div className="restoran_info_box">
                <h1>Restoran name</h1>
                <div className="restoran_delivery">
                  <div>
                    <span>
                      <MdOutlineAccessTimeFilled />
                    </span>
                    <p>
                      15-20
                      <span>daqiqa</span>
                    </p>
                  </div>
                  <div>
                    <span>
                      <BsFillStarFill />
                    </span>
                    <p>
                      4.5
                      <span>200+</span>
                    </p>
                  </div>
                  <button className="restoran_btn" style={{ color: "#000" }}>
                    <BsInfoCircle />
                  </button>
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="free_delivery">
            <img src={delivery} alt="delivery_img" />
            <div className="delivery_info">
              <p>Bepul yetkazib berish</p>
              <p>10 000 so'mdan boshlab istalgan buyurtma uchun</p>
            </div>
          </div>

          <div className="restoran_product">
            <h1>Categori</h1>
            <CatalogCard />
          </div>
        </div>
        {/* =============== basket section =========== */}
        <div className="product_basket">
          <Cart />
        </div>
      </div>
    </div>
  );
};

const menuData = [
  {
    name: "Lavash",
    query: "lavash",
  },
  {
    name: "Gamburger",
    query: "gamburger",
  },
  {
    name: "Donar",
    query: "donar",
  },
  {
    name: "Hot-Dog",
    query: "hotdog",
  },
  {
    name: "Salat",
    query: "salat",
  },
  {
    name: "Pitsa",
    query: "pitsa",
  },
  {
    name: "Shovurma",
    query: "shourma",
  },
  {
    name: "KFC",
    query: "kfc",
  },
];
