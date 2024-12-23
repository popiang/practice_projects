import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (!context)
        return new Error("useTaskContext must be inside TaskContextProvider");

    return context;
};
