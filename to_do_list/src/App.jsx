import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div>
            <h2>To-Do List</h2>
			<TaskForm />
			<TaskList />
        </div>
    );
}

export default App;
