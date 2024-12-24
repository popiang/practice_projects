import { useTaskContext } from "../context/useTaskContext";

const Filters = () => {
    const { dispatch, filter } = useTaskContext();

    const handleFilter = (value) => {
        dispatch({ type: "SET_FILTER", payload: value });
    };

    return (
        <div className="filter">
            <button
                onClick={() => handleFilter("all")}
                className={filter === "all" ? "active" : ""}
            >
                All
            </button>
            <button
                onClick={() => handleFilter("completed")}
                className={filter === "completed" ? "active" : ""}
            >
                Completed
            </button>
            <button
                onClick={() => handleFilter("not-completed")}
                className={filter === "not-completed" ? "active" : ""}
            >
                Not Completed
            </button>
        </div>
    );
};

export default Filters;
