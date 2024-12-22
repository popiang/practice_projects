import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice";
import cartReducer from "../features/cart/cartsSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
		cart: cartReducer
    },
});
