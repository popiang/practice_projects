const Summary = ({summary}) => {
    return (
        <div className="summary">
            <h3 className="summary-header">Summary</h3>
            <div className="summary-content">
                <p className="summary-spent">Total Spent: RM{summary.total_spent}</p>
                <p className="summary-remaining">Remaining: RM{summary.remaining}</p>
            </div>
        </div>
    );
};

export default Summary;
