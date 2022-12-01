import React from "react";
import { FcApproval } from "react-icons/fc";
const CategoryCard = ({ category, handleModal }) => {
  const {
    brand,
    image_url,
    location,
    originalPrice,
    post_date,
    resalePrice,
    sellerName,
    title,
  } = category;
  return (
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img src={image_url} className="object-cover w-full h-64" alt="" />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              Post Date
            </a>
            <span className="text-gray-600">— {post_date}</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {brand}
          </a>
          <p className="mb-2 text-gray-700">{title}</p>
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              Location
            </a>
            <span className="text-gray-600">— {location}</span>
          </p>
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              original price —{" "}
            </a>
            <span className="text-black-600 font-extrabold">
              {" "}
              {originalPrice} $
            </span>
          </p>
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              Resale Price —{" "}
            </a>
            <span className="text-black-600 font-extrabold">
              {resalePrice} $
            </span>
          </p>
          <div className="mb-3 text-xs font-semibold tracking-wide uppercase flex justify-between">
            <div>
              <a
                href="#"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Seller Name
              </a>
              <span className="text-gray-600">— {sellerName}</span>{" "}
            </div>
            <span className="text-base">
              <FcApproval />
            </span>{" "}
          </div>
          <label
            onClick={() => handleModal(category)}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            htmlFor="my-modal"
          >
            Book Now
          </label>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
