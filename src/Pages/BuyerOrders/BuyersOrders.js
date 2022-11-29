import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import LoadingSpinner from "../../shared/LoadingSpinner";
import BookingProduct from "./BookingProduct";

const BuyersOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    
    data: bookingData = [],
  } = useQuery({
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
            {/* <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Tesla Inc.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$275</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Coca Cola co.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$8,950,500</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Nvidia Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="dark:text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="dark:text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$98,218</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyersOrders;
