import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { add } from "../../features/cart/cartsSlice";
import { formatCurrency } from "../../utils/helpers";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const productToCart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        };

		console.log(productToCart);

        dispatch(add(productToCart));
    };

    return (
        <div className="card">
            <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success">
                    {formatCurrency(product.price)}
                </p>
                <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductItem;
