import React from "react";
import "./profil.css";
// import { LuStar } from "react-icons/lu";
import img from "./images.png"
import { useNavigate } from "react-router-dom";

export const MyProfil = () => {

  const navigate = useNavigate()

  const closeModal = () => {
    navigate("/");
  };
  return (
    <div className="my_profil">
        <div className="profil_navbar">
      <p>Fodifiy</p>
      <p>About</p>  
      <p>Product</p>  
      <p>Contact</p>  
      
        </div>
        <div className="my_account">
          <div>
          <h1>My Account</h1>
          <p>Account Dashboard</p>
          </div>
          <hr />
        </div>
         <div className="profil_card">
          <div>
          <p>Start Your Order</p>
   <form>
        <section>
            <img src={img} alt="" />
            <input placeholder="Name..." type="text" />
        </section>
          <section>
            <img src={img} alt="" />
            <input placeholder="Name..." type="text" />
        </section>
        <section>
            <img src={img} alt="" />
            <input placeholder="Name..." type="text" />
        </section>
        <section>
            <img src={img} alt="" />
            <input placeholder="Name..." type="text" />
        </section>
   </form>
          <button>Find Food</button>
          </div>
          <div>
            <p>Vendors with Special Offers (*****)</p>
      <section>
      <img src={img} alt="" />
      <p>Burger_Pate's</p>
      | 
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      |
      </section>
      <section>
      <img src={img} alt="" />
      <p>Burger_Pate's</p>
      | 
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      |
      </section>
      <section>
      <img src={img} alt="" />
      <p>Burger_Pate's</p>
      | 
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      |
      </section>
          </div>
        </div>
        <div className="profil_footer">
            <div>
            <button>Current Orders</button>
            <button>Favorite Vendors</button>
            <button>You Rewards</button>
            <button>Order History</button> 
              </div> 
        </div> 
        <div className="baground" onClick={closeModal}>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  )
}