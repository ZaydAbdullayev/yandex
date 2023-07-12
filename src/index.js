import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SnackbarProvider>
  </Fragment>
);
