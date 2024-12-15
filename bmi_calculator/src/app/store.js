import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "../features/bmi/bmiSlice";

export const store = configureStore({
    reducer: {
        bmi: bmiReducer,
    },
});
