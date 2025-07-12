import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  // I REFETCHED AGAIN SO THAT I  CAN BE ABLE TO NAVIGATE PRODUCTS THROUGH THEIR ID IN URL 
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Failed to fetch product", error));
  }, [id]);
////////////////////////////////////////////////////////////////////////////////////////////a
  if (!product) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="container product-details">
      <h2 className="details-title">{product.title}</h2>

      <div className="details-content">
        <div className="details-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="details-info">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
