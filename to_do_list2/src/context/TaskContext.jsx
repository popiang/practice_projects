import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo_list: [
                    ...state.todo_list,
                    { ...action.payload, id: uuid(), isCompleted: false },
                ],
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todo_list: state.todo_list.filter(
                    (todo) => todo.id !== action.payload
                ),
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todo_list: state.todo_list.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, isCompleted: !todo.isCompleted }
                        : todo
                ),
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

/* eslint-disable react/prop-types */
export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todo_list: [],
        filter: "all",
    });

    const filteredTodos = state.todo_list.filter((todo) => {
        if (state.filter === "completed") {
            return todo.isCompleted;
        } else if (state.filter === "not-completed") {
            return !todo.isCompleted;
        } else {
            return true;
        }
    });

    return (
        <TaskContext.Provider
            value={{ todo_list: filteredTodos, filter: state.filter, dispatch }}
        >
            {children}
        </TaskContext.Provider>
    );
};
