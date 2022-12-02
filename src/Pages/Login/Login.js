import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, googleLogIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (data) => {
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        const currentUser = result.user;

        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((data) => {
        SavedUser(data.user.displayName, data.user.email, "buyer");
      })
      .catch((err) => toast.error(err));
  };

  const SavedUser = (name, email, accType) => {
    const currentUser = { name, email, accType };
    fetch(`https://resalemarketserver.vercel.app/users/${currentUser?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Success Fully Login");
        navigate(from, { replace: true });
      })
      .catch((er) => toast.error(er));
  };

  return (
    <div className="flex mx-auto my-16 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleLogIn)}
        noValidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?{" "}
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="hover:underline dark:text-violet-400"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
