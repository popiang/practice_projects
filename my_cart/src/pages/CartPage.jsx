import CartList from "../components/cart/CartList";

const CartPage = () => {
	return (
        <div className="cart-page">
            <h1 className="cart-title">Your Cart</h1>
            <CartList />
        </div>
    );
}

export default CartPage;
