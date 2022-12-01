import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SavedUser = (name, email, accType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const user = { name, email, accType };
  console.log(user);

  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data.acknowledged) {
        toast.success("Successfully SignUp");
        navigate(from, { replace: true });
      }
    })
    .catch((er) => toast.error(er));
};

// export default SavedUser;
