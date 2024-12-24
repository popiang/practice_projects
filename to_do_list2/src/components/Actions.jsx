import { useTaskContext } from "../context/useTaskContext";

const Actions = () => {
    const { dispatch } = useTaskContext();

    const handleClearTodo = () => {
        dispatch({ type: "CLEAR_TODO" });
    };

    return (
        <div className="delete">
            <button onClick={handleClearTodo}>Clear To-Do List</button>
        </div>
    );
};

export default Actions;
