import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { setFilter } from "../features/todo/todoSlice";

const TaskList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo.task);
    const filter = useSelector((state) => state.todo.filter);

    let todoListToDisplay;
    if (filter === "ALL") {
        todoListToDisplay = todoList;
    } else if (filter === "COMPLETED") {
        todoListToDisplay = todoList.filter((todo) => todo.completed === true);
    } else {
        todoListToDisplay = todoList.filter((todo) => todo.completed === false);
    }

    return (
        <>
            <button onClick={() => dispatch(setFilter("ALL"))}>All</button>
            <button onClick={() => dispatch(setFilter("COMPLETED"))}>
                Completed
            </button>
            <button onClick={() => dispatch(setFilter("PENDING"))}>
                Not Completed
            </button>
            <ul>
                {todoListToDisplay &&
                    todoListToDisplay.map((todo) => (
                        <TaskItem key={todo.id} todo={todo} />
                    ))}
            </ul>
        </>
    );
};

export default TaskList;
