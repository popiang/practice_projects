import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    height: 0,
    weight: 0,
    result: 0,
    category: "",
};

export const bmiSlice = createSlice({
    name: "bmi",
    initialState,
    reducers: {
        set_height: (state, action) => {
            state.height = action.payload;
        },
        set_weight: (state, action) => {
            state.weight = action.payload;
        },
        calculate: (state) => {
            const heightInMeter = state.height / 100;
            state.result = state.weight / (heightInMeter * heightInMeter);

            if (state.result < 18.5) state.category = "Underweight";
            if (state.result > 18.5 && state.result <= 24.9)
                state.category = "Normal weight";
            if (state.result > 24.9 && state.result < 29.9)
                state.category = "Overweight";
            if (state.result >= 30) state.category = "Obese";
        },
        reset: (state) => {
            state.height = initialState.height;
            state.weight = initialState.weight;
            state.result = initialState.result;
            state.category = initialState.category;
        },
    },
});

export const { set_height, set_weight, calculate, reset } = bmiSlice.actions;

export default bmiSlice.reducer;
