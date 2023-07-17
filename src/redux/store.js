import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCardUpdate } from "./cart";
import { reModal } from "./modal";

export const store = configureStore({
  reducer: combineReducers({
    updateCard: reCardUpdate,
    modal: reModal,
  }),
});
