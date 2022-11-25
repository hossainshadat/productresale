import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "./../Pages/Home/Home";

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
    ],
  },
]);

export default routes;
