import {configureStore} from "@reduxjs/toolkit";
import cart  from "./cartSlice";

console.log("cart - ", { cart })
const appStore = configureStore({
    reducer:{
        cart,
        // thene
        // user
    }
});

export default appStore;