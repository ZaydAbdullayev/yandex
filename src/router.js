import React from "react";
import "./global.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout/layout";
import { Home } from "./pages/home/home";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
