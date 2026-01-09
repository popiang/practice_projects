import { useState } from "react";

const TodoItem = ({ todo, handleDelete, handleToggleComplete, handleEdit }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [tempTodo, setTempTodo] = useState(todo.task);

    const editTodo = () => {
        setIsEdit(true);
    };

    const saveEdit = () => {
        if (tempTodo.trim() === "") {
            alert("Empty task submitted");
        } else {
            setIsEdit(false);
            handleEdit(todo.id, tempTodo);
        }
    };

    const cancelEdit = () => {
        setIsEdit(false);
        setTempTodo(todo.task);
    };

    return (
        <li key={todo.id} className="todo-item">
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
                            Delete
                        </button>
                        <button onClick={() => editTodo()}>Edit</button>
                    </>
                )}
                {isEdit && (
                    <>
                        <button
                            className="save-button"
                            onClick={() => saveEdit()}
                        >
                            Save
                        </button>
                        <button onClick={() => cancelEdit()}>Cancel</button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
