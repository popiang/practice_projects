import { useSelector } from "react-redux";
import { selectProducts } from "../../features/product/productSelectors";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = useSelector(selectProducts);

    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
            <div className="row">
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
