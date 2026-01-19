const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-list">
            <h3 className="expense-list__header">Expense List</h3>
            <li className="expense-list__list">
                {expenses &&
                    expenses.map((expense) => (
                        <ul className="expense-list__item">
                            <p>Title: {expense.title}</p>
                            <p>Amount(RM): {expense.amount} </p>
                        </ul>
                    ))}
            </li>
        </div>
    );
};

export default ExpenseList;
