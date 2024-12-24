import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        totalItem: 0,
        totalPrice: 0,
        isLoading: false,
    });

    useEffect(() => {
        const totalPrice = state.cart.reduce((totalPrice, item) => {
            return totalPrice += item.price * item.quantity;
        }, 0);
        dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
