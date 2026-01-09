import { useState } from "react";
import Header from "./components/Header";
<<<<<<< HEAD
import TodoForm from "./components/TodoForm";
import FilterBar from "./components/FilterBar";
=======
import AddTodoForm from "./components/AddTodoForm";
import Filter from "./components/Filter";
>>>>>>> 738efb0a9cea7c03e4d844339575da8fe5ae6bd1
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

<<<<<<< HEAD
            <TodoForm
                newTask={newTask}
                setNewTask={setNewTask}
                handleSubmit={handleSubmit}
            />
			
            <FilterBar filter={filter} handleFilter={handleFilter} />
=======
            <AddTodoForm
                handleSubmit={handleSubmit}
                newTask={newTask}
                setNewTask={setNewTask}
            />

            <Filter filter={filter} handleFilter={handleFilter} />
>>>>>>> 738efb0a9cea7c03e4d844339575da8fe5ae6bd1

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
