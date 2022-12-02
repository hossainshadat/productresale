import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (data) => {
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          data.image = result.data.url;

          const { name, image, email, password, accType } = data;

          // CreateUser

          createUser(email, password)
            .then((userCredential) => {
              const user = userCredential.user;

              toast.success("User created Successfully");
              navigate(from, { replace: true });
              // User Name and Photo Updated
              updateNamePhoto(name, image)
                .then(() => {
                  SavedUser(name, email, accType);
                  toast.success("Updated Name and Photo");
                })
                .catch((err) => toast.error(err));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });

    const SavedUser = (name, email, accType) => {
      const currentUser = { name, email, accType };
      console.log(currentUser);

      fetch(
        `https://resalemarketserver.vercel.app/users/${currentUser?.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.data.acknowledged) {
            toast.success("Successfully SignUp");
            navigate(from, { replace: true });
          }
        })
        .catch((er) => toast.error(er));
    };
  };

  return (
    <div className="flex mx-auto my-16 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleRegister)}
        noValidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              {...register("name")}
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              data-temp-mail-org="0"
              required
            />
          </div>
          <div>
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label htmlFor="files" className="block text-sm font-medium">
                Image
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                className="px-8 py-6 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              />
            </fieldset>
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Account Type
            </label>
            <select
              {...register("accType")}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              data-temp-mail-org="0"
              required
            >
              <option value="seller">Seller</option>
              <option value="buyer" selected>
                Buyer
              </option>
            </select>
          </div>
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
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
