const Filter = ({ filter, handleFilter }) => {
    return (
        <div className="filter">
            <div className="all">
                <label htmlFor="all">All</label>
                <input
                    type="radio"
                    id="all"
                    checked={filter === "all"}
                    onChange={() => handleFilter("all")}
                />
            </div>
            <div className="active">
                <label htmlFor="active">Active</label>
                <input
                    type="radio"
                    id="active"
                    checked={filter === "active"}
                    onChange={() => handleFilter("active")}
                />
            </div>
            <div className="completed">
                <label htmlFor="completed">Completed</label>
                <input
                    type="radio"
                    id="completed"
                    checked={filter === "completed"}
                    onChange={() => handleFilter("completed")}
                />
            </div>
        </div>
    );
};

export default Filter;
