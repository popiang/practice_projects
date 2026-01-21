import { useContext } from "react"
import { ExpenseContext } from "./ExpenseContext"

const useExpenses = () => {
	const context = useContext(ExpenseContext);

	if (!context) {
		throw new Error("useExpenses must be used within an ExpenseProvider");
	}

	return context;
}

export default useExpenses;