import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCardUpdate } from "./cart";
import { reModal } from "./modal";
import { reLocation } from "./map";
import { rePrice } from "./price";

export const store = configureStore({
  reducer: combineReducers({
    updateCard: reCardUpdate,
    modal: reModal,
    location: reLocation,
    price: rePrice,
  }),
});
