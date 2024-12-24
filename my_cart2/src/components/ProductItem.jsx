import { useCartContext } from "../hooks/useCartContext";

const ProductItem = ({ product }) => {
    const { isLoading, dispatch } = useCartContext();

    const handleAddToCart = () => {
        dispatch({ type: "SET_IS_LOADING", payload: true });

        const newCartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
			image: product.image,
			description: product.description,
            quantity: 1,
        };

		setTimeout(() => {
			dispatch({ type: "ADD_TO_CART", payload: newCartItem });
			dispatch({ type: "SET_IS_LOADING", payload: false });
		}, 400)

    };

    return (
        <div className="card">
            <img
                src={product.image}
                alt="Product Image"
                className="card-image"
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="cart-text">{product.price}</p>
                <button
                    className="button"
                    onClick={handleAddToCart}
                    disabled={isLoading}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
