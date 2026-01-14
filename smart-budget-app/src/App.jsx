import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header />
			<ExpenseList />
			<ExpenseForm />
        </div>
    );
}

export default App;
