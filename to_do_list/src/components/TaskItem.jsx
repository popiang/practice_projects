import PropTypes from "prop-types";
import { deleteTask, toggleComplete } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TaskItem = ({ todo }) => {
	const dispatch = useDispatch();

    const handleToogleComplete = () => {
        dispatch(toggleComplete(todo.id));
    };

	const handleDelete = () => {
		dispatch(deleteTask(todo.id));
	}

    return (
        <li>
            <span
                onClick={handleToogleComplete}
                style={{ cursor: "pointer" }}
                className={todo.completed ? "strike-through" : ""}
            >
                {todo.text}
            </span>
            <button onClick={handleDelete}>delete</button>
        </li>
    );
};

TaskItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TaskItem;
