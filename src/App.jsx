import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import RegisterForm from "./components/regiser/Register";
import LoginForm from "./components/login/Login";
import Details from "./components/details/Details";
import ProtectedRoute from "./components/protected/ProtectedRoute";

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
