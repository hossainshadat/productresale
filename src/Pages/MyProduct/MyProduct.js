import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../shared/LoadingSpinner";
import MyProductInfo from "./MyProductInfo";
import { toast } from "react-toastify";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    data: myproducts = [],
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: () =>
      fetch(`http://localhost:5000/productcategory?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleAdvertise = (id) => {
    const productItem = myproducts.data.find((item) => item._id === id);

    fetch("http://localhost:5000/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Successfully add products");
        }
      })
      .catch((er) => toast.error(er));
  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this Product"
    );
    if (proceed) {
      fetch(`http://localhost:5000/productcategory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            LoadingSpinner();
            refetch();
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
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">id</th>
              <th className="p-3">Date</th>
              <th className="p-3">Brand Name</th>
              <th className="p-3">Image</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {myproducts?.data?.map((info) => (
              <MyProductInfo
                key={info._id}
                info={info}
                refetch={refetch}
                handleDelete={handleDelete}
                handleAdvertise={handleAdvertise}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
