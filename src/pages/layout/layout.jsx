import React from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
