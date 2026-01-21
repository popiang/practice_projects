import useExpenses from "../context/useExpenses";

const ExpenseList = () => {
    const { expenses, deleteExpense } = useExpenses();

    return (
        <div className="expense-list">
            <h3 className="expense-list__header">Expense List</h3>
            <ul className="expense-list__list">
                {expenses &&
                    expenses.map((expense) => (
                        <li className="expense-list__item" key={expense.id}>
                            <p>Title: {expense.title}</p>
                            <p>Amount(RM): {expense.amount} </p>
                            <button onClick={() => deleteExpense(expense.id)}>
                                Delete
                            </button>
							<button>
								Edit
							</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
