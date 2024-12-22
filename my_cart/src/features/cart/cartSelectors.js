export const selectCart = (state) => state.cart;

export const selectCartById = (state, id) => {
    return state.cart.find((c) => c.id === id);
};

export const selectCartTotalQuantity = (state) => {
    return state.cart.reduce((total, cart) => total + cart.quantity, 0);
};

export const selectCartTotalPrice = (state) => {
    return state.cart.reduce(
        (total, cart) => total + cart.quantity * cart.price,
        0
    );
};
