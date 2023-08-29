import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import "./scss/app.scss";
//import Cart from "./pages/Cart";
import MainLayout from "./layouts/MainLayout";
import { fetchAuthMe } from "./redux/slices/auth";
import { routes } from "./router";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
