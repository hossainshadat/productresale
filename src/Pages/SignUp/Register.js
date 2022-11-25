import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleRegister = (data) => {
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          data.image = result.data.url;

          const { name, image, email, password } = data;

          // CreateUser

          createUser(email, password)
            .then((userCredential) => {
              const user = userCredential.user;

              toast.success("User created Successfully");
              reset(data);
              // User Name and Photo Updated
              updateNamePhoto(name, image)
                .then(() => toast.success("Updated Name and Photo"))
                .catch((err) => toast.error(err));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
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
              <option value="normalUser">Normal User</option>
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
