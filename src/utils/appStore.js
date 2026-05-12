import {configureStore} from "@reduxjs/toolkit";
import cart from "./cartSlice";
import theme from "./themeSlice"

const appStore = configureStore({
    reducer:{
        cart,
        theme,
        // user
    }
});

export default appStore;