import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./../contexts/AuthProvider/AuthProvider";
import logo from "../../src/logo.svg";
import LoadingSpinner from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(data);
  const { isLoading, data: userData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await fetch(
        `https://resalemarketserver.vercel.app/users?email=${user?.email}`
      ).then((res) => res.json()),
  });

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Succfully logout"))
      .catch((err) => toast.error(err));
  };

  // console.log(userData?.data[0]?.accType);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="lg:hidden p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>

        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/blog"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </Link>{" "}
          </li>

          {user?.email ? (
            <>
              {userData?.data[0]?.accType === "seller" && (
                <>
                  <li>
                    <Link
                      to="/addproducts"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      AddProducts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myproducts"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My Products
                    </Link>
                  </li>
                </>
              )}
              {userData?.data[0]?.accType === "admin" && (
                <li>
                  <Link
                    to="/dashboard"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              {userData?.data[0]?.accType === "buyer" && (
                <li>
                  <Link
                    to="/myorders"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Myorders
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to="/login"
                  aria-label="About us"
                  title={user.displayName}
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src={user.photoURL}
                  />
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogOut}
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="lg:hidden">
          {userData?.data[0]?.accType === "admin" && (
            <label
              htmlFor="dashboard-drawer"
              tabIndex={0}
              className="lg:hidden btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    {user?.email ? (
                      <>
                        {userData?.data[0]?.accType === "admin" && (
                          <li>
                            <Link
                              to="/dashboard"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Dashboard
                            </Link>
                          </li>
                        )}

                        {userData?.data[0]?.accType === "seller" && (
                          <>
                            <li>
                              <Link
                                to="/addproducts"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                AddProducts
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/myproducts"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                My Products
                              </Link>
                            </li>
                          </>
                        )}

                        {userData?.data[0]?.accType === "buyer" && (
                          <li>
                            <Link
                              to="/myorders"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Myorders
                            </Link>
                          </li>
                        )}

                        <li>
                          <Link
                            to="/login"
                            aria-label="About us"
                            title={user.displayName}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            <img
                              alt=""
                              className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                              src={user.photoURL}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={handleLogOut}
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/login"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
