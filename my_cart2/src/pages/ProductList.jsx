import ProductItem from "../components/ProductItem";
import products from "../data/products.json";

const ProductList = () => {
    return (
        <div className="product-list-container">
            <h3>Product List</h3>
            <div className="row">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
