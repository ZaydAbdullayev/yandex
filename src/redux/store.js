import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reAuth } from "./auth";
import { reCardUpdate } from "./cart";

export const store = configureStore({
  reducer: combineReducers({
    updateCard: reCardUpdate,
    auth: reAuth,
  }),
});
