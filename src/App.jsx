import "./App.css";
import Navbar from "./componenets/navbar/Navbar";
import ProductList from "./componenets/productList/ProductList";
import Footer from "./componenets/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import About from "./componenets/about/about";
import Details from "./componenets/details/details";
import Cart from "./componenets/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>LOADING....</div>}>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<ProductList />} />
          <Route path="/details/:id" element={<Details/>} />
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
