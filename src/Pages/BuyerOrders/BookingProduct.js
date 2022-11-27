import React from "react";

const BookingProduct = ({ booking }) => {
  const { bookingDate, brandName, image_url, productTitle, productPrice } =
    booking;
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
      <td className="p-3">
        <p>{bookingDate}</p>
      </td>
      <td className="p-3">
        <p>{brandName}</p>
      </td>
      <td className="p-3">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={image_url} alt={brandName} />
          </div>
        </div>
      </td>
      <td className="p-3">
        <p>{productTitle}</p>
        <p className="dark:text-gray-400">Tuesday</p>
      </td>
      <td className="p-3 text-right">
        <p>${productPrice}</p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
          <span>Pending</span>
        </span>
      </td>
    </tr>
  );
};

export default BookingProduct;
