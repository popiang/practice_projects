import { useTaskContext } from "../context/useTaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
	const {todo_list} = useTaskContext();	

	return (
        <div className="task-list-container">
            <h2>Task List</h2>
            {todo_list &&
                todo_list.map((t) => <TaskItem todo={t} key={t.key} />)}
        </div>
    );
}

export default TaskList;
