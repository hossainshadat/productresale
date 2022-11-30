import React from "react";
import { FcApproval } from "react-icons/fc";

const HomeAdvertisedCardItem = ({ add }) => {
  const {
    image_url,
    title,
    post_date,
    sellerName,
    brandName,
    location,
    originalPrice,
    resalePrice,
  } = add;
  return (
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
          {brandName}
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
          <span className="text-black-600 font-extrabold">{resalePrice} $</span>
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
      </div>
    </div>
  );
};

export default HomeAdvertisedCardItem;
