import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/todoSlice";

const TaskForm = () => {
    const [task, setTask] = useState("");
	const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
		dispatch(addTask(task));
		setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add Task
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </label>
            <button>Add Task</button>
        </form>
    );
};

export default TaskForm;
