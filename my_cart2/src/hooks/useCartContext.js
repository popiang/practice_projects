import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context)
        return new Error(
            "useCartContext should be used within CartContextProvider"
        );
	
	return context;
};
