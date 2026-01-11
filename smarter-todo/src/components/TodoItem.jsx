import { useState } from "react";

const TodoItem = ({ todo, handleDelete, handleToggleComplete, handleEdit }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [tempTodo, setTempTodo] = useState(todo.task);
    const [message, setMessage] = useState("");

    const editTodo = () => {
        setMessage("");
        setIsEdit(true);
    };

    const saveEdit = () => {
        const isSuccess = handleEdit(todo.id, tempTodo);

        if (isSuccess) {
            setIsEdit(false);
        } else {
            setMessage("Please enter a valid task");
        }
    };

    const cancelEdit = () => {
        setIsEdit(false);
        setMessage("");
        setTempTodo(todo.task);
    };

    return (
        <li key={todo.id} className="todo-item">
            <div className="todo-item__edit">
                {!isEdit && (
                    <span
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            cursor: "pointer",
                        }}
                        onClick={() => handleToggleComplete(todo.id)}
                    >
                        {todo.task}
                    </span>
                )}

                {isEdit && (
                    <input
                        className="edit-input"
                        type="text"
                        value={tempTodo}
                        onChange={(e) => setTempTodo(e.target.value)}
                    />
                )}

                <div className="buttons">
                    {!isEdit && (
                        <>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(todo.id)}
                            >
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                            <button onClick={() => editTodo()}>
                                <span className="material-symbols-outlined">
                                    edit
                                </span>
                            </button>
                        </>
                    )}
                    {isEdit && (
                        <>
                            <button
                                className="save-button"
                                onClick={() => saveEdit()}
                            >
                                <span className="material-symbols-outlined">
                                    save
                                </span>
                            </button>
                            <button onClick={() => cancelEdit()}>
                                <span className="material-symbols-outlined">
                                    arrow_back
                                </span>
                            </button>
                        </>
                    )}
                </div>
            </div>
            {isEdit && message && (
                <p className="input-error-message">{message}</p>
            )}
        </li>
    );
};

export default TodoItem;
