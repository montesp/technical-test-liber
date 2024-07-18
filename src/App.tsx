import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { User } from "./pages/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "user/:userId",
    element: <User/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}

export { App }
