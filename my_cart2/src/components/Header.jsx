import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <Link to="/">Product</Link>
                </div>
                <div className="cartLink">
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
