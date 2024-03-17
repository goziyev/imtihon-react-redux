import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Products from "./pages/products";
import ProductPage from "./pages/product";
import Checkout from "./components/chekout";
import { motion } from "framer-motion";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
  }, []);

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Adjust duration as needed
      >
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Home></Home>
                </Layout>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/products/:page"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Products></Products>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:page/:id"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <ProductPage></ProductPage>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/cheskout"
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                  <Checkout></Checkout>
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
