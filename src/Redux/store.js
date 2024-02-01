import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "./bookingsSlice";
const store = configureStore({
  reducer: {
    booking: bookingsSlice,
  },
});

export default store;
