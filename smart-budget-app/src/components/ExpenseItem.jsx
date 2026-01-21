import useExpenses from "../context/useExpenses";

const ExpenseItem = ({ expense }) => {
	const { setExpenseBeingEdit, deleteExpense } = useExpenses();

	const handleEdit = () => {
		setExpenseBeingEdit(expense);
	}

    return (
        <li className="expense-list__item" key={expense.id}>
            <p>Title: {expense.title}</p>
            <p>Amount(RM): {expense.amount} </p>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </li>
    );
};

export default ExpenseItem;
