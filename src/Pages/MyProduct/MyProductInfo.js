import React from "react";

const MyProductInfo = ({ info, handleDelete }) => {
  const {
    _id,
    brand: brandName,
    image_url,
    post_date,
    resalePrice: productPrice,
  } = info;

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
      <td className="p-3">
        <p>{_id}</p>
      </td>
      <td className="p-3">
        <p>{post_date}</p>
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
        <p>available</p>
        {/* <p className="dark:text-gray-400">Tuesday</p> */}
      </td>
      <td className="p-3 text-right">
        <p>${productPrice}</p>
      </td>
      <td className="p-3 text-right">
        <button className="mr-2 px-3 py-2 font-semibold rounded-md dark:bg-orange-400 dark:text-gray-900">
          advertise
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="px-3 py-2 font-semibold rounded-md dark:bg-red-400 dark:text-gray-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyProductInfo;
