import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./../shared/LoadingSpinner";
import { AuthContext } from "./../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const { isLoading, data: userData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(
        `https://resalemarketserver.vercel.app/users?email=${user?.email}`
      ).then((res) => res.json()),
  });
  if (loading) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (userData?.data[0]?.accType === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
