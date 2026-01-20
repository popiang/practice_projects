const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-list">
            <h3 className="expense-list__header">Expense List</h3>
            <ul className="expense-list__list">
                {expenses &&
                    expenses.map((expense) => (
                        <li className="expense-list__item" key={expense.id}>
                            <p>Title: {expense.title}</p>
                            <p>Amount(RM): {expense.amount} </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
