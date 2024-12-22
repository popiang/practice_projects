import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import Header from "../components/Header";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<ProductsPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
