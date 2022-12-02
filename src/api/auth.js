export const setAuthToken = (name, email, accType) => {
  const currentUser = {
    name,
    email,
    accType,
  };

  fetch(`http://localhost:5000/users?email=${currentUser?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.data.token);
    });
};
