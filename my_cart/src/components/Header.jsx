import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <h1>My E-commerce Store</h1>
                    </Link>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <span>Cart</span>
                        {/* <img src="cart-icon.png" alt="Cart" width="30" /> */}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
