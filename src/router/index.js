import { lazy, Suspense } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ItemPage from "../pages/ItemPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Cart = lazy(() => import(/*webpackChunkName: 'Cart'*/ "../pages/Cart"));

export const routes = [
  { path: "/PizzaShop", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "pizza/:id", component: <ItemPage /> },
  { path: "*", component: <NotFound /> },
  {
    path: "cart",
    component: (
      <Suspense fallback={<div>Loading</div>}>
        <Cart />
      </Suspense>
    ),
  },
];
