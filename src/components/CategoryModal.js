import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../contexts/AuthProvider/AuthProvider";

const CategoryModal = ({ singleProduct }) => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const { brandName, resalePrice, title } = singleProduct;
  // const { register, handleSubmit } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const brandName = form.brandName.value;
    const productTitle = form.productTitle.value;
    const productPrice = form.productPrice.value;
    const meetingLocation = form.meetingLocation.value;
    const phoneNumber = form.phoneNumber.value;

    const bookingInfo = {
      userName,
      email,
      brandName,
      productTitle,
      productPrice,
      meetingLocation,
      phoneNumber,
    };
    console.log(bookingInfo);
    form.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-900">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Account settings
            </h2>

            <form onSubmit={handleSubmit}>
              {/* <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}
              <div class="grid grid-cols-1 gap-6 mt-4">
                <div>
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    id="userName"
                    type="text"
                    name="userName"
                    defaultValue={displayName}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>

                <div>
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    id="emailAddress"
                    type="email"
                    defaultValue={email}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>

                <div>
                  <label class="text-gray-700 dark:text-gray-200" for="brand">
                    Brand Name
                  </label>
                  <input
                    name="brandName"
                    id="brand"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={brandName}
                  />
                </div>

                <div>
                  <label class="text-gray-700 dark:text-gray-200" for="title">
                    Product title
                  </label>
                  <input
                    name="productTitle"
                    id="title"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={title}
                    readOnly
                  />
                </div>
                <div>
                  <label class="text-gray-700 dark:text-gray-200" for="price">
                    Product Price
                  </label>
                  <input
                    name="productPrice"
                    id="price"
                    type="number"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={resalePrice}
                  />
                </div>
                <div>
                  <label class="text-gray-700 dark:text-gray-200" for="phone">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    id="phone"
                    type="number"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label class="text-gray-700 dark:text-gray-200" for="meeting">
                    Meeting Location
                  </label>
                  <input
                    name="meetingLocation"
                    id="meeting"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div class="flex justify-end mt-6 modal-action">
                <div className="modal-action">
                  <button type="submit">
                    <label
                      htmlFor="my-modal"
                      className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    >
                      Submit
                    </label>
                  </button>
                </div>
              </div>
            </form>
          </section>
          {/* <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
