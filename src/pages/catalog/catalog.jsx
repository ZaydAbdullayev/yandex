import React, { useState } from "react";
import "./catalog.css";
import { CatalogCard } from "../../components/cProductCard/cProductCard";

import main_img from "../../components/assets/images/fast_food2.jpg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import delivery from "../../components/assets/images//11146-NN5BIF.jpg";

export const Catalog = () => {
  const [favorite, setFavorite] = useState(false);

  const addToLike = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div className="catalog_box">
      <div className="catalog_page">
        {/* ========== filter the product ============== */}
        <div className="product_filter"></div>

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
        <div className="product_basket"></div>
      </div>
    </div>
  );
};
