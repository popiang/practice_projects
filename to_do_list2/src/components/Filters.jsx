import { useTaskContext } from "../context/useTaskContext";

const Filters = () => {
    const { dispatch } = useTaskContext();

    const handleFilter = (value) => {
        dispatch({ type: "SET_FILTER", payload: value });
    };

    return (
        <div>
            <button onClick={() => handleFilter("all")}>All</button>
            <button onClick={() => handleFilter("completed")}>Completed</button>
            <button onClick={() => handleFilter("not-completed")}>
                Not Completed
            </button>
        </div>
    );
};

export default Filters;
