import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/SignUp/Register";
import Home from "./../Pages/Home/Home";
import CategoryProduct from "./../Pages/Category/CategoryProduct";
import PrivateRoutes from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import BuyersOrders from "../Pages/BuyerOrders/BuyersOrders";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Dashboard from "../Layout/DashboardLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboardcontent from "../Pages/Dashboard/Dashboardcontent";
import AllUser from "../Pages/Dashboard/AllUser";
import AdminRoutes from "./AdminRoute";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoutes>
            <BuyersOrders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoutes>
            <AddProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <PrivateRoutes>
            <MyProduct />
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <CategoryProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/productcategory?category_id=${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoutes>
        <PrivateRoutes>
          <DashboardLayout />
        </PrivateRoutes>
      </AdminRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllUser />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/dashboard/others",
        element: <Dashboardcontent />,
      },
    ],
  },
]);

export default routes;
