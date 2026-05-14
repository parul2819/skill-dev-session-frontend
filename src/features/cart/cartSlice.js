import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
      addItem: (state, action) => {
          state.items.push(action.payload);
      },
      removeItem: (state, action) => {
          state.items = state.items.filter(
              (item) => item.item_id !== action.payload
          )
      },
      clearCart: (state) => {
          state.items.length = 0;
      },
    },
});

console.log("cartSlice : ", { cartSlice });
export const  { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;