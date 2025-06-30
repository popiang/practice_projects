import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const storedData = JSON.parse(localStorage.getItem("cartState")) || {
        cart: [],
        totalItem: 0,
        totalPrice: 0,
    };

    const [state, dispatch] = useReducer(cartReducer, {
        cart: storedData.cart,
        totalItem: storedData.totalItem,
        totalPrice: storedData.totalPrice,
        isLoading: false,
    });

    useEffect(() => {
        const totalPrice = state.cart.reduce((totalPrice, item) => {
            return (totalPrice += item.price * item.quantity);
        }, 0);

        const totalItem = state.cart.reduce((total, item) => {
            return (total += item.quantity);
        }, 0);

        dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
        dispatch({ type: "SET_TOTAL_ITEM", payload: totalItem });

        localStorage.setItem(
            "cartState",
            JSON.stringify({
                cart: state.cart,
                totalItem,
                totalPrice,
            })
        );
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
