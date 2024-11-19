import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  }
])