import { createContext, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([
        { id: 1, title: "Shampoo", amount: 12 },
        { id: 2, title: "Book", amount: 15 },
        { id: 3, title: "Fruit", amount: 8 },
    ]);

	const [expenseBeingEdit, setExpenseBeingEdit] = useState(null);

    const addExpense = (expense) => {
        setExpenses((prev) => [...prev, expense]);
    };

    const editExpense = (id, updatedFields) => {
        setExpenses((prev) =>
            prev.map((expense) => {
                if (expense.id === id) {
                    return { ...expense, ...updatedFields };
                } else {
                    return expense;
                }
            }),
        );
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    };

    return (
        <ExpenseContext.Provider
            value={{
                expenses,
                addExpense,
                editExpense,
                deleteExpense,
                expenseBeingEdit,
                setExpenseBeingEdit,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};

export { ExpenseContext, ExpenseProvider };
