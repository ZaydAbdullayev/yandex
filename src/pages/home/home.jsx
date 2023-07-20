import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ApiGetService } from "../../services/api.service";
import { Map } from "../../components/map/map";

import { BsTaxiFrontFill, BsFillStarFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";

export const Home = () => {
  const [restaurant, setRestaurant] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ApiGetService.fetching("get/restaurants")
      .then((res) => {
        setRestaurant(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewShop = (id) => {
    navigate(`/catalog/${id}`);
  };

  const restoran = restaurant.filter((item) => {
    const value = "restaurant";
    return item?.type?.toLowerCase().includes(value.toLowerCase());
  });

  const shop = restaurant.filter((item) => {
    const value = "shop";
    return item?.type?.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="home_page">
      <div className="root">
        <div className="offers">
          <p>Offers</p>
          <button>
            {" "}
            <Link to="/" style={{ color: "#333" }}>
              All
            </Link>{" "}
          </button>
        </div>
        <p className="Restaurant">Restaurant</p>
        <div className="product-card">
          {restoran?.map((shop) => {
            return (
              <section onClick={() => viewShop(shop.id)} key={shop.id}>
                <div>
                  <button>Free dilevery</button>
                  <figure>
                    <img src={shop.img} alt="restoran_img" />
                  </figure>
                  <button>
                    <BsTaxiFrontFill /> {shop.delivery_time_from} -{" "}
                    {shop.delivery_time_till} min
                  </button>
                </div>
                <label>
                  <h1>{shop?.username?.split("_").join(" ")}</h1>
                  <p>
                    <BsFillStarFill style={{ color: "#aaa" }} /> 4.7 Good (
                    {shop.rating}) $$$
                  </p>
                  <button title="Bepul yetkazib berish 10 000 sumdan boshlab istalhan yerga bepul">
                    <MdDeliveryDining /> Bepul yetkazib berish
                  </button>
                </label>
              </section>
            );
          })}
        </div>

        <p className="Restaurant">Shops</p>
        <div className="product-item">
          {shop?.map((shop) => {
            return (
              <section onClick={viewShop} key={shop.id}>
                <div>
                  <button>Free dilevery</button>
                  <figure>
                    <img src={shop.img} alt="restoran_img" />
                  </figure>
                  <button>
                    <BsTaxiFrontFill /> {shop.delivery_time_from} -{" "}
                    {shop.delivery_time_till} min
                  </button>
                </div>
                <label>
                  <h1 style={{ textTransform: "capitalize" }}>
                    {shop?.username?.split("_").join(" ")}
                  </h1>
                  <p>
                    <BsFillStarFill style={{ color: "green" }} /> 4.7 Good
                    (200+) $$$
                  </p>
                </label>
              </section>
            );
          })}
          <Map />
        </div>

        <p className="Restaurant">All</p>
        <div className="product-card">
          {restaurant.map((shop) => {
            return (
              <section onClick={viewShop} key={shop.id}>
                <div>
                  <button>Free dilevery</button>
                  <figure>
                    <img src={shop.img} alt="restoran_img" />
                  </figure>
                  <button>
                    <BsTaxiFrontFill /> {shop.delivery_time_from} -{" "}
                    {shop.delivery_time_till} min
                  </button>
                </div>
                <label>
                  <h1 style={{ textTransform: "capitalize" }}>
                    {shop?.username?.split("_").join(" ")}
                  </h1>
                  <p>
                    <BsFillStarFill style={{ color: "#fc0" }} /> 4.7 Good (200+)
                    $$$
                  </p>
                  <button>
                    <MdDeliveryDining /> Bepul yetkazib berish
                  </button>
                </label>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
