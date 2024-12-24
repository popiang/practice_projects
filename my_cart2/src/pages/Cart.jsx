import CartItem from "../components/CartItem";
import { useCartContext } from "../hooks/useCartContext";
import { formatCurrency } from "../utils/helper";

const Cart = () => {
    const { cart, dispatch, totalPrice } = useCartContext();

    const handleRemoveAll = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h3>Shopping Cart</h3>
                <button onClick={handleRemoveAll}>Remove All</button>
            </div>

            {cart.length > 0 ? (
                cart.map((c) => <CartItem item={c} key={c.id} />)
            ) : (
                <p className="cart-empty">Your cart is empty</p>
            )}

            <div className="cart-footer">
                <div>
                    Total: <span>{formatCurrency(totalPrice)}</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
