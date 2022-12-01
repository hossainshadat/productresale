import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CategoryModal = ({ singleProduct }) => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const { brand, resalePrice, image_url, title } = singleProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const brandName = form.brandName.value;
    const image_url = form.image_url.value;
    const productTitle = form.productTitle.value;
    const productPrice = form.productPrice.value;
    const meetingLocation = form.meetingLocation.value;
    const phoneNumber = form.phoneNumber.value;

    // date time
    const date = new Date();
    const bookingDate = date.toLocaleString();

    const bookingInfo = {
      userName,
      email,
      brandName,
      productTitle,
      image_url,
      productPrice,
      meetingLocation,
      phoneNumber,
      bookingDate,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Booking comfirmed");
        if (data.acknowledged) {
          toast.success("Booking comfirmed");
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Account settings
            </h2>

            <form onSubmit={handleSubmit}>
              {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}
              <div className="grid grid-cols-1 gap-6 mt-4">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    id="userName"
                    type="text"
                    name="userName"
                    defaultValue={displayName}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    id="emailAddress"
                    type="email"
                    defaultValue={email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    readOnly
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="brand"
                  >
                    Brand Name
                  </label>
                  <input
                    name="brandName"
                    id="brand"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={brand}
                    readOnly
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="title"
                  >
                    Product title
                  </label>
                  <input
                    name="productTitle"
                    id="title"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={title}
                    readOnly
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="title"
                  >
                    Image Url
                  </label>
                  <input
                    name="image_url"
                    id="title"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={image_url}
                    readOnly
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="price"
                  >
                    Product Price
                  </label>
                  <input
                    name="productPrice"
                    id="price"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    defaultValue={resalePrice}
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    id="phone"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="meeting"
                  >
                    Meeting Location
                  </label>
                  <input
                    name="meetingLocation"
                    id="meeting"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6 modal-action">
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
