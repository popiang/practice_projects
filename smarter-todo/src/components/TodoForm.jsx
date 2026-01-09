const TodoForm = ({ newTask, setNewTask, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                required
                placeholder="Enter new task.."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">+</button>
        </form>
    );
};

export default TodoForm;
