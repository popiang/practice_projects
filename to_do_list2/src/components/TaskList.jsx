import { useTaskContext } from "../context/useTaskContext";
import AddTask from "./AddTask";
import Filters from "./Filters";
import TaskItem from "./TaskItem";

const TaskList = () => {
	const {todo_list} = useTaskContext();	

	console.log(todo_list);

	return (
        <div className="task-list-container">
            <h2>Task List</h2>
			<AddTask />
			<Filters />
            {todo_list &&
                todo_list.map((t) => <TaskItem todo={t} key={t.id} />)}
        </div>
    );
}

export default TaskList;
