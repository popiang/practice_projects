export const selectProducts = (state) => state.products.products;

export const selectProductById = (state, id) => {
    return state.products.products.find((product) => product.id === id);
};

export const selectProductsByPrice = (state, minPrice, maxPrice) => {
    return state.products.products.find(
        (product) => product.price >= minPrice && product.price <= maxPrice
    );
};
