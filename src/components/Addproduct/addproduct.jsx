import React from "react";
import "./addproduct.css";

export const Addproduct = () => {
    return (
        <div className="AddProduct">
        <form className="form-add-product">
          <label>
            <span>Maxsulot nomi</span>
            <input type="text"
             name="type"
             placeholder="Fast food" />
          </label>
          <label>
            <span>Telefon nomer</span>
            <input type="number"
             name="type"
             placeholder="+99897777-77-77" />
          </label>
          <label>
            <span>About</span>
            <select name="for_whom" required>
              <option value="men">Contact</option>
            </select>
          </label>
          <label>
            <span>price</span>
            <input
             type="number"
             name="price"
             required
             placeholder="00000000" />
          </label>
          <label className="select-file">
            <p>Maxsulot rasmlari</p>
            <input
              type="file"
              name="image"
              accept="image/jpg, image/jpeg, image/png"
              required
              multiple
          />
          </label>
          <div className="view-product-img">
        </div>
          <input
           type="submit"
           value="Maxsulot qoshish +++" />
        </form>
      </div>
    )
}
<button></button>