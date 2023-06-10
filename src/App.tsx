import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./scss/app.scss";
import Home from "./pages/Home";
//import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ItemPage from "./pages/ItemPage";
import MainLayout from "./layouts/MainLayout";

const Cart = lazy(() => import(/*webpackChunkName: 'Cart'*/"./pages/Cart"));
function App() {
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
        <Route path="pizza/:id" element={<ItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
