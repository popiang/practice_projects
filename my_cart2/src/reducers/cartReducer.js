export const cartReducer = (state, action) => {
    let isAlreadyInCartIndex;

    switch (action.type) {
        case "ADD_TO_CART":
            isAlreadyInCartIndex = state.cart.findIndex(
                (c) => c.id === action.payload.id
            );
            if (isAlreadyInCartIndex !== -1) {
                return {
                    ...state,
                    cart: state.cart.map((c, i) =>
                        i === isAlreadyInCartIndex
                            ? { ...c, quantity: c.quantity + 1 }
                            : c
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload),
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((c) =>
                    c.id === action.payload
                        ? { ...c, quantity: c.quantity + 1 }
                        : c
                ),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((c) =>
                    c.id === action.payload && c.quantity > 1
                        ? { ...c, quantity: c.quantity - 1 }
                        : c
                ),
            };
        case "CLEAR_CART":
            return {
                cart: [],
                totalItem: 0,
                totalPrice: 0,
                isLoading: false,
            };
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.payload,
            };
        case "SET_TOTAL_ITEM":
            return {
                ...state,
                totalItem: action.payload,
            };
        default:
            return state;
    }
};
