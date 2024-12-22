import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
			const existingProductIndex = state.findIndex(cart => cart.name === action.payload.name);

            if (existingProductIndex !== -1) {
				state[existingProductIndex].quantity += 1;
            } else {
                state.push(action.payload);
            }
        },
        increment: (state, action) => {
			const index = state.findIndex(cart => cart.id === action.payload);
			state[index].quantity += 1;
        },
        decrement: (state, action) => {
			const index = state.findIndex(cart => cart.id === action.payload);
			state[index].quantity = state[index].quantity > 1 ? state[index].quantity - 1 : state[index].quantity;
        },
        remove: (state, action) => {
            return state.filter((cart) => cart.id !== action.payload);
        },
    },
});

export const { add, increment, decrement, remove } = cartsSlice.actions;

export default cartsSlice.reducer;
