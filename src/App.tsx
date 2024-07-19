import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "user/",
    element: <UserPage/>,
  },
  {
    path: "user/:userId",
    element: <UserPage/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}

export { App }
