import React, { useState, useEffect, Fragment } from "react";
import "./catalog.css";
import { CatalogCard } from "../../components/cProductCard/cProductCard";
import { ProductMenu } from "../../components/productMenu/productMenu";
import { Link, useParams } from "react-router-dom";
import { Cart } from "../cart/cart";
import {
  MdOutlineFavoriteBorder,
  MdOutlineAccessTimeFilled,
  MdFavorite,
} from "react-icons/md";
import { BsInfoCircle, BsFillStarFill } from "react-icons/bs";
import delivery from "../../components/assets/images//11146-NN5BIF.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { ApiGetService, ApiService } from "../../services/api.service";

export const Catalog = () => {
  const user = JSON.parse(localStorage.getItem("customer")) || [];
  const [favorite, setFavorite] = useState(false);
  const [shop, setShop] = useState([]);
  const id = useParams().id;
  const [category, setCategory] = useState([]);
  const name = shop?.username?.split("_").join(" ");
  const [selectedCategory, setSelectedCategory] = useState("");
  const user_id = user?.users?.id;

  useEffect(() => {
    ApiGetService.fetching(`get/restaurant/${id}`)
      .then((res) => {
        setShop(res?.data?.innerData);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    ApiGetService.fetching("get/products")
      .then((res) => {
        setCategory(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const categoryes = category
    ? category.filter((item) =>
        item?.restaurant === id ? item.category : null
      )
    : [];

  const getUniqueCategories = () => {
    const uniqueCategories = new Set();
    categoryes.forEach((item) => {
      uniqueCategories.add(item.category);
    });
    return Array.from(uniqueCategories);
  };

  const uniqueCategories = getUniqueCategories();

  const addToLike = (shop) => {
    ApiService.fetching("add/toFavorites", shop)
      .then((res) => {
        console.log(res);
        setFavorite(true);
      })
      .catch((err) => console.log(err));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
            {uniqueCategories.map((category) => (
              <a
                href={`#${category}`}
                key={category}
                style={{ letterSpacing: "2px" }}
                onClick={() => handleCategoryClick(category)}
                className={
                  selectedCategory === category ? "active_category" : ""
                }
              >
                {category}
              </a>
            ))}
          </ProductMenu>
        </div>

        {/* =========== show product section ============= */}
        <div className="product_show">
          <figure className="about_restoran" key={id}>
            <img src={shop.img} alt="restotaunt_img" />
            <figcaption className="about_restoran_item">
              <span>
                <button
                  className="restoran_btn"
                  onClick={() =>
                    addToLike({
                      id: id,
                      state: 1,
                      username: name,
                      user_id: user_id,
                      rating: shop?.rating,
                      img: shop?.img,
                    })
                  }
                >
                  {favorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                </button>
              </span>
              <div className="restoran_info_box">
                <h1>{name}</h1>
                <div className="restoran_delivery">
                  <div>
                    <span>
                      <MdOutlineAccessTimeFilled />
                    </span>
                    <p>
                      {shop.delivery_time_from} - {shop.delivery_time_till}
                      <span>daqiqa</span>
                    </p>
                  </div>
                  <div>
                    <span>
                      <BsFillStarFill />
                    </span>
                    <p>
                      4.5
                      <span>{shop.rating}</span>
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
            {uniqueCategories.map((category) => (
              <Fragment key={category}>
                <h1
                  id={category}
                  style={
                    selectedCategory === category ? { paddingTop: "15%" } : {}
                  }
                >
                  {category}
                </h1>
                <CatalogCard restaurantId={id} category={category} />
              </Fragment>
            ))}
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
