import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import "./scss/app.scss";
import Home from "./pages/Home";
//import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ItemPage from "./pages/ItemPage";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { fetchAuthMe } from "./redux/slices/auth";

const Cart = lazy(() => import(/*webpackChunkName: 'Cart'*/ "./pages/Cart"));
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="pizza/:id" element={<ItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
