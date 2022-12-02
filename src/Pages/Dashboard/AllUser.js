import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../shared/LoadingSpinner";
import UsersRow from "./UsersRow";

const AllUser = () => {
  const data = useLoaderData();
  console.log(data.data);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            LoadingSpinner();
            toast.success(data.message);
          } else {
            toast.error(data.error);
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="w-full text-3xl font-bold leading-tight dark:text-gray-900 pb-4">
        All Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Serial No</th>
              <th className="p-3">Account Type</th>
              <th className="p-3">Name and Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((user, i) => (
              <UsersRow
                key={user._id}
                index={i + 1}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
