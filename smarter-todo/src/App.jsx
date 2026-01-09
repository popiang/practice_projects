import { useState } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

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
            <Header />

            <AddTodoForm
                handleSubmit={handleSubmit}
                newTask={newTask}
                setNewTask={setNewTask}
            />

            <Filter filter={filter} handleFilter={handleFilter} />

            {todos && (
                <TodoList
                    todos={todos}
                    filter={filter}
                    handleDelete={handleDelete}
                    handleToggleComplete={handleToggleComplete}
                />
            )}
        </div>
    );
}

export default App;
