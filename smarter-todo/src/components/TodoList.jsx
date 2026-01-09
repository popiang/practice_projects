import TodoItem from "./TodoItem";

const TodoList = ({ todos, filter, handleDelete, handleToggleComplete, handleEdit }) => {
    return (
        <ul className="todo-list">
            {todos
                .filter((todo) => {
                    if (filter === "all") return true;
                    if (filter === "completed") return todo.completed;
                    if (filter === "active") return !todo.completed;
                })
                .map((todo) => (
                    <TodoItem
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggleComplete={handleToggleComplete}
						handleEdit={handleEdit}
                    />
                ))}
        </ul>
    );
};

export default TodoList;
