import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inCart = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === product.id)
  );

  const quantity = inCart?.quantity || 0;

  const handleIncrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      if (quantity < product.stock) {
        dispatch(incrementQuantity(product.id));
      }
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > 0) {
      dispatch(decrementQuantity(product.id));
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const detailClick = () => {
    navigate(`/details/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={detailClick}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <h4>In stock: {product.stock}</h4>
      <p className="description">{product.description}</p>
      <p className="rating">⭐ {product.rating}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrease} disabled={quantity === 0}>
          −
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} disabled={quantity === product.stock}>
          +
        </button>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        // disabled={inCart}
      >
        {inCart ? "✅ In Cart" : "🛒 Add to Cart"}
      </button>
    
      {inCart && <p className="in-cart-msg">✅ In cart: {quantity}</p>}
    </div>
  );
}

export default ProductCard;
