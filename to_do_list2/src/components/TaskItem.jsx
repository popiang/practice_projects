import { useTaskContext } from "../context/useTaskContext";

/* eslint-disable react/prop-types */
function TaskItem({ todo }) {
    const { dispatch } = useTaskContext();

    const handleDelete = () => {
        dispatch({ type: "REMOVE_TODO", payload: todo.id });
    };

    const handleToggleComplete = () => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id });
    };

    return (
        <div className="task-item">
            <p
                className="task-description"
                style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
            >
                {todo.description}
            </p>
            <div className="task-actions">
                <input
                    type="checkbox"
                    value={todo.isCompleted}
                    onChange={handleToggleComplete}
                />
				<button onClick={handleDelete} className="delete-button">X</button>
            </div>
        </div>
    );
}

export default TaskItem;
