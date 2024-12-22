import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../features/cart/cartsSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrement(item.id));
    };

    const handleRemove = () => {
        dispatch(remove(item.id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{formatCurrency(item.price)}</p>
                <p className="cart-item-quantity">{item.quantity}</p>
            </div>
            <div className="cart-actions">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;
