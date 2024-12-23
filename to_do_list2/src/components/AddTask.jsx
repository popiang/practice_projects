import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";

const AddTask = () => {
    const { dispatch } = useTaskContext();
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        const newTask = {
            description: task,
        };
        dispatch({ type: "ADD_TODO", payload: newTask });
        setTask("");
    };

    return (
        <div className="add-task-container">
            <label className="task-label">
                <span>New Task: </span>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="task-input"
                />
            </label>
            <button onClick={handleAddTask} className="add-button">
                Add Task
            </button>
        </div>
    );
};

export default AddTask;
