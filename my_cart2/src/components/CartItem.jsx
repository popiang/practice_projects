import { useCartContext } from "../hooks/useCartContext";
import { formatCurrency } from "../utils/helper";

const CartItem = ({ item }) => {
	const {dispatch} = useCartContext();

	const handleIncrement = () => {
		dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
	}

	const handleDecrement = () => {
		dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
	}

	const handleRemove = () => {
		dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
	}

    return (
        <div className="cart-item">
            <img src={item.image} alt="Image" />
            <div className="cart-item-desc">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            <div className="cart-item-quantity">
                <button onClick={handleIncrement}>+</button>
                <span>{item.quantity}</span>
                <button onClick={handleDecrement}>-</button>
            </div>
            <div className="cart-item-price">
                <p>{formatCurrency(item.price)}</p>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
