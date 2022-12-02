import React from "react";

const UsersRow = ({ index, user, handleDelete, handleVerified }) => {
  const { _id, name, email, accType } = user;
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
      <td className="p-3">
        <p>{index}</p>
      </td>
      <td className="p-3">
        <p>{accType}</p>
      </td>
      <td className="p-3">
        <p>{name}</p>
        <p className="dark:text-gray-400">{email}</p>
      </td>
      <td className="p-3">
        <button
          onClick={() => handleVerified(_id)}
          className="mr-2 px-3 py-2 font-semibold rounded-md dark:bg-orange-400 dark:text-gray-900"
        >
          Verify
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

export default UsersRow;
