import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
    const summary = {
        total_spent: 120,
        remaining: 380,
    };

    const expenses = [
        { id: 1, title: "Shampoo", amount: 12 },
        { id: 2, title: "Book", amount: 15 },
        { id: 3, title: "Fruit", amount: 8 },
    ];

    return (
        <div className="container">
            <Header />
            <Summary summary={summary} />
            <ExpenseList expenses={expenses} />
            <ExpenseForm />
        </div>
    );
}

export default App;
