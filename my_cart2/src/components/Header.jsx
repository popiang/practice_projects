import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

const Header = () => {
    const { totalItem } = useCartContext();

    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <Link to="/">Product</Link>
                </div>
                <div className="cart-link">
                    <Link to="/cart">Cart</Link>
                    {totalItem > 0 && (
                        <span className="cart-count-notification">
                            ({totalItem})
                        </span>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
