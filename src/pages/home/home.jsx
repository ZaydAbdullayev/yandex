import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Burger from "./img/Burger 1.jpg";

export const Home = () => {
  const navigate = useNavigate();

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
              <Link to="/add-product">All</Link>{" "}
            </button>
          </div>
        </div>
        <div className="Restaurant">Restaurant</div>
        <div className="product-card">
          <section onClick={viewShop}>
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
