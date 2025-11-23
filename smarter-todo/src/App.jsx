import { useState } from "react";

function App() {
    const [newTask, setNewTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskObject = {
            id: Date.now(),
            task: newTask,
            completed: false,
        };
        setTodos([...todos, newTaskObject]);
        setNewTask("");
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleToggleComplete = (id) => {
        console.log(id);
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
        );
    };

    const handleFilter = (filterInput) => {
        setFilter(filterInput);
    };

    return (
        <div className="container">
            <h1 className="header">Smarter Todo</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    required
                    placeholder="Enter new task.."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">+</button>
            </form>

            <div className="filter">
                <div className="all">
                    <label htmlFor="all">All</label>
                    <input
                        type="radio"
                        id="all"
                        checked={filter === "all"}
                        onChange={() => handleFilter("all")}
                    />
                </div>
                <div className="active">
                    <label htmlFor="active">Active</label>
                    <input
                        type="radio"
                        id="active"
                        checked={filter === "active"}
                        onChange={() => handleFilter("active")}
                    />
                </div>
                <div className="completed">
                    <label htmlFor="completed">Completed</label>
                    <input
                        type="radio"
                        id="completed"
                        checked={filter === "completed"}
                        onChange={() => handleFilter("completed")}
                    />
                </div>
            </div>

            {todos && (
                <ul className="todo-list">
                    {todos
                        .filter((todo) => {
                            if (filter === "all") return true;
                            if (filter === "completed") return todo.completed;
                            if (filter === "active") return !todo.completed;
                        })
                        .map((todo) => (
                            <li key={todo.id} className="todo-item">
                                <span
                                    style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        handleToggleComplete(todo.id)
                                    }
                                >
                                    {todo.task}
                                </span>
                                <button onClick={() => handleDelete(todo.id)}>
                                    x
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default App;
