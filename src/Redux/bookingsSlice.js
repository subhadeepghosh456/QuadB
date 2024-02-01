import { createSlice } from "@reduxjs/toolkit";

const item =
  localStorage.getItem("bookings") !== null
    ? JSON.parse(localStorage.getItem("bookings"))
    : [];

const bookings = createSlice({
  name: "bookings",
  initialState: {
    items: item,
  },
  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
      localStorage.setItem(
        "bookings",
        JSON.stringify(state.items.map((item) => item))
      );
    },
  },
});
export const { addItems } = bookings.actions;

export default bookings.reducer;
