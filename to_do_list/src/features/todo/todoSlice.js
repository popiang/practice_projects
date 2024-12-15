import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    task: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const id = uuid();
            state.task = [
                ...state.task,
                { id, text: action.payload, completed: false },
            ];
        },
        toggleComplete: (state, action) => {
            state.task = state.task.map((t) =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            );
        },
        editTask: (state, action) => {
            const { id, text } = action.payload;
            state.task = state.task.map((t) =>
                t.id === id ? { ...t, text } : t
            );
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((t) => t.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleComplete, editTask, deleteTask, setFilter } =
    todoSlice.actions;

export default todoSlice.reducer;
