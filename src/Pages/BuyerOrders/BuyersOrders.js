import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import LoadingSpinner from "../../shared/LoadingSpinner";
import BookingProduct from "./BookingProduct";

const BuyersOrders = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, data: bookingData = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: () =>
      fetch(`http://localhost:5000/booking?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Brand Name</th>
              <th className="p-3">Image</th>
              <th className="p-3">Product Description</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {bookingData?.data?.map((booking) => (
              <BookingProduct key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyersOrders;
