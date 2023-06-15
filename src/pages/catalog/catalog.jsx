import React from "react";
import "./catalog.css";
import { CatalogCard } from "../../components/cProductCard/cProductCard";

export const Catalog = () => {
  return (
    <div className="catalog_box">
      <div className="catalog_page">
        <div className="product_filter"></div>
        <div className="product_show">
          <CatalogCard />
        </div>
        <div className="product_basket"></div>
      </div>
    </div>
  );
};
