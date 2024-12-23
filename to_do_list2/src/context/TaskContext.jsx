import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todo_list: [
                    ...state.todo_list,
                    { ...action.payload, id: uuid(), isCompleted: false },
                ],
            };
        case "REMOVE_TODO":
            return {
                todo_list: state.todo_list.filter(
                    (todo) => todo.id !== action.payload
                ),
            };
        case "TOGGLE_COMPLETE":
            return {
                todo_list: state.todo_list.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                ),
            };
        default:
            return state;
    }
};

/* eslint-disable react/prop-types */
export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todo_list: [],
    });

    return (
        <TaskContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
