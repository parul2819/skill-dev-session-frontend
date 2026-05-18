import {configureStore} from "@reduxjs/toolkit";
import cart from "@features/cart/cartSlice";
import theme from "@utils/themeSlice"

const appStore = configureStore({
    reducer:{
        cart,
        theme,
        // user
    }
});

export default appStore;
