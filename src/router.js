import React from "react";
import "./components/assets/global.css";
import "./components/assets/root.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout/layout";
import { Home } from "./pages/home/home";
import { Catalog } from "./pages/catalog/catalog";
import { Login, Signin } from "./pages/login/login";
import { MyProfil } from "./pages/myProfil/profil";
import { MyFavorite } from "./pages/myFavorite/favorite.jsx";
import { Payment } from "./payment/payment";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog/:id" element={<Catalog />} />
          <Route path="/my/profil" element={<MyProfil />} />
          <Route path="/my/favourite" element={<MyFavorite />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
