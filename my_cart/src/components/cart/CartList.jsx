import { useSelector } from "react-redux";
import {
    selectCart,
    selectCartTotalPrice,
    selectCartTotalQuantity,
} from "../../features/cart/cartSelectors";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helpers";

const CartList = () => {
    const cart = useSelector(selectCart);
    const totalItems = useSelector(selectCartTotalQuantity);
    const totalPrice = useSelector(selectCartTotalPrice);

    return (
        <div className="cart-list">
            {cart.length > 0 ? (
                cart.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
                <p className="empty-cart-message">Your cart is empty!</p>
            )}

            {cart.length > 0 && (
                <div className="cart-summary">
					<h3>Cart Summary</h3>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {formatCurrency(totalPrice)}</p>
                    <button>Check Out</button>
                </div>
            )}
        </div>
    );
};

export default CartList;
