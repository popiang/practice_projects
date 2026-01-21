import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import Summary from "./components/ExpenseSummary";

function App() {

    return (
        <div className="container">
            <Header />
            <Summary />
            <ExpenseList />
            <ExpenseForm />
        </div>
    );
}

export default App;
