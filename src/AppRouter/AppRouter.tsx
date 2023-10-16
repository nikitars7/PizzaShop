import { Routes,Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { routes } from "../router"
const AppRouter = () => {
  return (
   <Routes>
   <Route path="/" element={<MainLayout />}>
     {routes.map((route) => (
       <Route key={route.path} path={route.path} element={route.component} />
     ))}
   </Route>
 </Routes>
  )
}

export default AppRouter