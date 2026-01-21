import useExpenses from "../context/useExpenses";

const ExpenseSummary = () => {
    const { expenses } = useExpenses();

    const total =
        expenses?.reduce((sum, expense) => {
            return sum + expense.amount;
        }, 0) ?? 0;

    return (
        <div className="summary">
            <h3 className="summary-header">Summary</h3>
            <div className="summary-content">
                <p className="summary-spent">
                    Total Spent: RM{total.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default ExpenseSummary;
