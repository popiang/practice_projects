import { useEffect, useState } from "react";
import useExpenses from "../context/useExpenses";

const ExpenseForm = () => {
    const { addExpense, editExpense, expenseBeingEdit, setExpenseBeingEdit } =
        useExpenses();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [titleError, setTitleError] = useState("");
    const [amountError, setAmountError] = useState("");

    // Clean useEffect to populate or reset form
    useEffect(() => {
        if (expenseBeingEdit) {
            setTitle(expenseBeingEdit.title);
            setAmount(expenseBeingEdit.amount);
        } else {
            setTitle("");
            setAmount("");
        }
    }, [expenseBeingEdit]);

    const handleSubmitExpense = (e) => {
        e.preventDefault();
        setTitleError("");
        setAmountError("");
        let hasError = false;

        if (title.trim() === "") {
            setTitleError("Enter a valid title");
            hasError = true;
        }

        if (isNaN(amount) || amount <= 0) {
            setAmountError("Enter a valid amount");
            hasError = true;
        }

        if (hasError) return;

        if (expenseBeingEdit) {
            editExpense(expenseBeingEdit.id, { title, amount: Number(amount) });
        } else {
            addExpense({ id: Date.now(), title, amount: Number(amount) });
        }

        // Reset form after submission
        setExpenseBeingEdit(null);
    };

    return (
        <div className="expense-form-container">
            <h3>Expense Form</h3>
            <form onSubmit={handleSubmitExpense} className="expense-form">
                <label>
                    <span>Title: </span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                {titleError && (
                    <span className="input-error-message">{titleError}</span>
                )}

                <label>
                    <span>Amount(RM): </span>
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                {amountError && (
                    <span className="input-error-message">{amountError}</span>
                )}

                <button type="submit">
                    {expenseBeingEdit ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default ExpenseForm;
