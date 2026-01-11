import { useState } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [newTask, setNewTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    const handleSubmit = (e) => {
        e.preventDefault();

        const sanitizedNewTask = validateTodo(newTask);

        if (!sanitizedNewTask) {
            return false;
        }

        const newTaskObject = {
            id: uuidv4(),
            task: sanitizedNewTask,
            completed: false,
        };
        setTodos([...todos, newTaskObject]);
        setNewTask("");

		return true;
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleEdit = (id, newTodo) => {
		
		const sanitizedTodo = validateTodo(newTodo);

        if (!sanitizedTodo) {
            return false;
        }

        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: sanitizedTodo };
                } else {
                    return todo;
                }
            })
        );

		return true;
    };

    const handleToggleComplete = (id) => {
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

    const validateTodo = (todo) => {
        const sanitizedTodo = todo.trim();
        return sanitizedTodo !== "" ? sanitizedTodo : null;
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

            {todos.length > 0 && (
                <TodoList
                    todos={todos}
                    filter={filter}
                    handleDelete={handleDelete}
                    handleToggleComplete={handleToggleComplete}
                    handleEdit={handleEdit}
                />
            )}
            {todos.length === 0 && <p className="empty-todos">Todo list is empty</p>}
        </div>
    );
}

export default App;
