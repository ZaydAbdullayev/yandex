import React, {
   useState } from "react";
import "./favorite.css";
import { FiStar } from "react-icons/fi"
import { BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom";

export const MyFavorite = () => {
  const [favorite, setFavorite] = useState(false);



  return (
    <div className="my_favorite">
     <div>
        <div className="my_account">
          <div>
          <h1>My Favorite</h1>
          <p>Dashboard</p>
          </div>
          <hr />
          <p>Restaurant</p>
        </div>
         <div className="fovorite_card" >
          <div> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia7DpZRe3-d7D3tzHidOTVsa_LClnmK1uc55heXzWvkBWEb_1dG6HdMXe8MytNNp3MEU&usqp=CAU" alt="" />
        <p>JIMMY'S BURGERS</p> 
        <span onClick={()=>setFavorite(1)}>
        {favorite >= 1 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(2)}>
        {favorite >= 2 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(3)}>
        {favorite >= 3 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(4)}>
        {favorite >= 4 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(5)}>
        {favorite >= 5 ? <BsStarFill /> : <FiStar />}
        </span>
        <p>===========</p>
        <button>Order</button>
          </div>
          <div > 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia7DpZRe3-d7D3tzHidOTVsa_LClnmK1uc55heXzWvkBWEb_1dG6HdMXe8MytNNp3MEU&usqp=CAU" alt="" />
        <p>JIMMY'S BURGERS</p> 
        <span onClick={()=>setFavorite(1)}>
        {favorite >= 1 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(2)}>
        {favorite >= 2 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(3)}>
        {favorite >= 3 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(4)}>
        {favorite >= 4 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(5)}>
        {favorite >= 5 ? <BsStarFill /> : <FiStar />}
        </span>
        <p>===========</p>
        <button>Order</button>
          </div>
          <div> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia7DpZRe3-d7D3tzHidOTVsa_LClnmK1uc55heXzWvkBWEb_1dG6HdMXe8MytNNp3MEU&usqp=CAU" alt="" />
        <p>JIMMY'S BURGERS</p> 
        <span onClick={()=>setFavorite(1)}>
        {favorite >= 1 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(2)}>
        {favorite >= 2 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(3)}>
        {favorite >= 3 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(4)}>
        {favorite >= 4 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(5)}>
        {favorite >= 5 ? <BsStarFill /> : <FiStar />}
        </span>
        <p>===========</p>
        <button>Order</button>
          </div>
          <div> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia7DpZRe3-d7D3tzHidOTVsa_LClnmK1uc55heXzWvkBWEb_1dG6HdMXe8MytNNp3MEU&usqp=CAU" alt="" />
        <p>JIMMY'S BURGERS</p> 
        <span onClick={()=>setFavorite(1)}>
        {favorite >= 1 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(2)}>
        {favorite >= 2 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(3)}>
        {favorite >= 3 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(4)}>
        {favorite >= 4 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(5)}>
        {favorite >= 5 ? <BsStarFill /> : <FiStar />}
        </span>
        <p>===========</p>
        <button>Order</button>
          </div>
          <div> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia7DpZRe3-d7D3tzHidOTVsa_LClnmK1uc55heXzWvkBWEb_1dG6HdMXe8MytNNp3MEU&usqp=CAU" alt="" />
        <p>JIMMY'S BURGERS</p> 
        <span onClick={()=>setFavorite(1)}>
        {favorite >= 1 ? <BsStarFill /> : <FiStar />}
        </span>
        <span onClick={()=>setFavorite(2)}>
        {favorite >= 2 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(3)}>
        {favorite >= 3 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(4)}>
        {favorite >= 4 ? <BsStarFill /> : <FiStar />}
        </span><span onClick={()=>setFavorite(5)}>
        {favorite >= 5 ? <BsStarFill /> : <FiStar />}
        </span>
        <p>===========</p>
        <button>
        <Link to="/catalog">order</Link>
        </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}