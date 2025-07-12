import React from "react";
import { useCartContext } from "../../context/cartContext/useCartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCartContext();
   const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-section">
          <p className="empty-cart">Your cart is empty.</p>
          <button className="go-home-btn" onClick={() => navigate("/")}>
             Add Products!
          </button>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>
                  ${item.price} × {item.quantity} ={" "}
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </p>

                <div className="cart-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    disabled={item.quantity >= item.stock}
                  >
                    ➕
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item)}
              >
                🗑 Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
