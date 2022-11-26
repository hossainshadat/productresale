import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import Home from "./../Pages/Home/Home";
import CategoryProduct from "./../Pages/Category/CategoryProduct";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        element: <CategoryProduct />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/productcategory?category_id=${params.id}`
          ),
      },
    ],
  },
]);

export default routes;
