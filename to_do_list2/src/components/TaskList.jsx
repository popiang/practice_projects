import { useTaskContext } from "../context/useTaskContext";
import Actions from "./Actions";
import AddTask from "./AddTask";
import Filters from "./Filters";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const { todo_list } = useTaskContext();

    console.log(todo_list);

    return (
        <div className="task-list-container">
            <h2>To-Do List</h2>
            <AddTask />
            <div className="buttons-container">
                <Filters />
                <Actions />
            </div>
            {todo_list.length > 0 ? (
                todo_list.map((t) => <TaskItem todo={t} key={t.id} />)
            ) : (
                <p className="empty-todo-list">Empty</p>
            )}
        </div>
    );
};

export default TaskList;
