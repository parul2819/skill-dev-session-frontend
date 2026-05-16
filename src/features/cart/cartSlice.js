import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
      addItem: (state, action) => {
          const item = state.items.find((i) => i.item_id === action.payload.item_id);

          (item ? item.quantity++ : state.items.push({ ...action.payload, quantity: 1}));
          // state.items.push(action.payload);
      },
      removeItem: (state, action) => {
          const item = state.items.find((i) => i.item_id === action.payload);

          if (!item) return;

          ((item.quantity>1) ?
              item.quantity-= 1 :
              state.items = state.items.filter(
              (item) => item.item_id !== action.payload
          ))
      },
      clearCart: (state) => {
          state.items.length = 0;
      },
    },
});

console.log("cartSlice : ", { cartSlice });
export const  { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;