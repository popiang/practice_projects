import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddExpense = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            title,
            amount: Number(amount),
        };
        addExpense(newExpense);

        setTitle("");
        setAmount("");
    };

    return (
        <div className="expense-form-container">
            <h3>Expense Form</h3>
            <form onSubmit={handleAddExpense} className="expense-form">
                <label>
                    <span>Title: </span>
                    <input
                        type="text"
                        value={title}
						required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>Amount(RM): </span>
                    <input
                        type="number"
                        step="0.01"
						min="0"
						required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
