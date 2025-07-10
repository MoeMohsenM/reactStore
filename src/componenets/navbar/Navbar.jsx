import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import { useCartContext } from "../../context/cartContext/useCartContext";

function Navbar() {
  const { cartItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">🛍 STORE</Link>
      </div>

      <ul className="navbar__links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/details/:id">Details</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li>
          <Link to="/cart" className="navbar__cart">
            🛒 Cart ({cartItems.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
