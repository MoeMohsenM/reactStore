import "./App.css";
import Navbar from "./componenets/navbar/Navbar";
import ProductList from "./componenets/productList/ProductList";
import Footer from "./componenets/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import About from "./componenets/about/about";
import Cart from "./componenets/cart/Cart";
import RegisterForm from "./componenets/regiser/Register";
import LoginForm from "./componenets/login/Login";
import Details from "./componenets/details/Details";
import ProtectedRoute from "./componenets/protected/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>LOADING....</div>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
