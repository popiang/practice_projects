const TodoItem = ({ todo, handleDelete, handleToggleComplete }) => {
    return (
        <li key={todo.id} className="todo-item">
            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
                onClick={() => handleToggleComplete(todo.id)}
            >
                {todo.task}
            </span>
            <button onClick={() => handleDelete(todo.id)}>x</button>
        </li>
    );
};

export default TodoItem;
