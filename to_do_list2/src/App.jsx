import AddTask from "./components/AddTask";
import Filters from "./components/Filters";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div>
            <Header />
            <AddTask />
            <Filters />
            <TaskList />
        </div>
    );
}

export default App;
