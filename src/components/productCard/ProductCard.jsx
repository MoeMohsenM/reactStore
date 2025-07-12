import { useState } from "react";
import { useCartContext } from "../../context/cartContext/useCartContext";
import "./ProductCard.css"; // ✅ Import styles
import { Navigate, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useCartContext();

const handleIncrease = (e) => {
  e.preventDefault();
  e.stopPropagation(); 
  if (counter < product.stock) setCounter(counter + 1);
};

const handleDecrease = (e) => {
  e.preventDefault();
  e.stopPropagation(); 
  if (counter > 0) setCounter(counter - 1);
};

const handleAddToCart = (e) => {
  e.preventDefault();
  e.stopPropagation(); 
  if (counter > 0) {
    addToCart({ ...product, quantity: counter });
    setCounter(1);
  }
};


const navigate =useNavigate()
const detailClick = () => {
    // e.preventDefault()
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
        <button onClick={handleDecrease} disabled={counter === 0}>−</button>
        <span>{counter}</span>
        <button onClick={handleIncrease} disabled={counter === product.stock}>+</button>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={counter === 0}
      >
        🛒 Add {counter} to Cart
      </button>
    </div>
  );
}

export default ProductCard;
