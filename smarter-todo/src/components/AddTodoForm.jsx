import { useState } from "react";

const AddTodoForm = ({ handleSubmit, newTask, setNewTask }) => {
    const [isSaveSuccess, setIsSaveSuccess] = useState(true);
    const [message, setMessage] = useState("");

    const saveTodo = (e) => {
        setMessage("");

        const isSuccess = handleSubmit(e);
        setIsSaveSuccess(isSuccess);

        if (!isSuccess) {
            setMessage("Please enter a valid task");
        }
    };

    return (
        <form onSubmit={saveTodo} className="todo-form">
            <div className="todo-form__input">
                <input
                    type="text"
                    placeholder="Enter new task.."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">+</button>
            </div>
            {!isSaveSuccess && message && (
                <p className="input-error-message">{message}</p>
            )}
        </form>
    );
};

export default AddTodoForm;
