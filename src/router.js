import React from "react";
import "./components/assets/global.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout/layout";
import { Home } from "./pages/home/home";
import { Catalog } from "./pages/catalog/catalog";
import { Login } from "./pages/login/login";
import { Addproduct } from "./components/Addproduct/addproduct";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<Addproduct />} />
        </Route>
      </Routes>
    </>
  );
};
