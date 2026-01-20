import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import Summary from "./components/ExpenseSummary";
import { useState } from "react";

function App() {
    const [expenses, setExpenses] = useState([
        { id: 1, title: "Shampoo", amount: 12 },
        { id: 2, title: "Book", amount: 15 },
        { id: 3, title: "Fruit", amount: 8 },
    ]);

	const addExpense = (expense) => {
		setExpenses(prev => [...prev, expense]);
	}

    return (
        <div className="container">
            <Header />
            <Summary expenses={expenses} />
            <ExpenseList expenses={expenses} />
            <ExpenseForm addExpense={addExpense} />
        </div>
    );
}

export default App;
