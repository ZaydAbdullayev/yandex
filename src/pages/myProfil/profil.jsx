import React from "react";
import "./profil.css";


export const MyProfil = () => {
  return (
    <div className="my_profil">
     <div>
     <div>
        <div className="my_account">
          <div>
          <h1>My Account</h1>
          <p>Account Orders</p>
          </div>
          <hr />
        </div>
         <div className="profil_card">
          <div>
          <p>Start Your Order</p>
   <form>
            <section>
            <span>Username</span>
            <input placeholder="Name..." type="text" />
            </section>
            <section>
            <span>Fullname</span>
            <input
             placeholder="Text"
              type="text" />
            </section>
            <section>
            <span>phone</span>
            <input
            placeholder="+998 99 777_77_77 "
            required
            type="number"
            name="phone"
           />
            </section>
            <section>
            <span>Count</span>
            <input
             placeholder="777"
             type="number" />
            </section>
   </form>
          <button>Find Food</button>
          </div>
       
        </div>
      

      </div>
     </div>
    </div>
  )
}