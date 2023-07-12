import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ApiGetService } from "../../services/api.service";

import Burger from "./img/Burger 1.jpg";

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

  const viewShop = () => {
    navigate("/catalog");
  };
  return (
    <div className="home_page">
      <div className="root">
        <div className="Navbar">
          <div>
            <p>Offers</p>
            <button>
              {" "}
              <Link to="/add-product" style={{ color: "#333" }}>
                All
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="Restaurant">Restaurant</div>
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
                    {shop.delivery_time_from}-{shop.delivery_time_till} min
                  </button>
                </div>
                <span>
                  <h1>{shop.name}</h1>
                  <p>4.7 Good (200+) $$$</p>
                  <button>Free dilevery</button>
                </span>
              </section>
            );
          })}
        </div>

        <h1 className="Restaurant">Shops</h1>
        <div className="product-item">
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
            </span>
          </section>
        </div>

        <div className="Restaurant">All</div>
        <div className="product-card">
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
          <section>
            <div>
              <button>Free dilevery</button>
              <figure>
                <img src={Burger} alt="" />
              </figure>
              <button>15-25 min</button>
            </div>
            <span>
              <h1>Lorem, ih1sum dolor.</h1>
              <p>4.7 Good (200+) $$$</p>
              <button>Free dilevery</button>
            </span>
          </section>
        </div>

        <div className="product-footer">
          <p>Even easier in the app</p>
          <div>
            <button>Apple</button>
            <button>Apple</button>
            <button>Apple</button>
          </div>
          <hr />
          <span>
            Contacts Delivery FAQ Become a partner Become a courier Eats for
            Business Plastic recycling Order food in the Yandex Go app Feedback
          </span>
          <hr />
          <span>
            <p>© 2018–2023 Yandex Eats LLC</p>
          </span>
        </div>
      </div>
    </div>
  );
};
