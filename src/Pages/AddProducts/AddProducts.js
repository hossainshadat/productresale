import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const getCategory = () => {
    axios.get("http://localhost:5000/category").then((res) => {
      setCategories(res.data.data);
    });
  };

  useEffect(() => getCategory(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category_id = form.category.value;

    const catName = categories.find(function (item) {
      return item._id === form.category.value;
    });

    const brand = catName.name;

    const image = form.image.files[0];
    const productDesc = form.productDesc.value;
    const condition = form.condition.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const yearsOfUse = form.yearsOfUse.value;
    const phoneNumber = form.phoneNumber.value;
    const location = form.location.value;

    const date = new Date();
    const post_date = date.toLocaleString();

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setImageUrl(result.data.url);
        }
      });

    const products = {
      category_id,
      image_url: imageUrl,
      title: productDesc,
      condition,
      resalePrice,
      originalPrice,
      yearsOfUse,
      phoneNumber,
      location,
      sellerName: user.displayName,
      post_date,
      brand,
    };

    fetch("http://localhost:5000/productcategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Successfully add products");
          form.reset();
          navigate("/myproducts");
        }
      })
      .catch((er) => toast.error(er));

    // toast.success("Successfully add products");
  };
  return (
    <section className="p-6 dark:text-gray-100">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          Add Products
        </h2>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Product Category
          </label>
          <select
            name="category"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            data-temp-mail-org="0"
            required
          >
            {categories.map((category) => (
              <option
                values={category.name}
                key={category._id}
                value={category._id}
              >
                {category.name}
              </option>
            ))}

            {/* <option value="buyer" selected>
              Buyer
            </option> */}
          </select>
        </div>
        <div>
          <fieldset className="w-full space-y-1 dark:text-gray-100">
            <label htmlFor="files" className="block text-sm font-medium">
              Image
            </label>
            <input
              type="file"
              className="px-8 py-6 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              name="image"
            />
          </fieldset>
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Product Description
          </label>
          <textarea
            id="description"
            type="text"
            name="productDesc"
            placeholder="Description..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          ></textarea>
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Product Condition
          </label>
          <select
            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            data-temp-mail-org="0"
            name="condition"
            required
          >
            <option value="fair">Fair</option>
            <option value="good">Good</option>
            <option value="excellent" selected>
              {" "}
              Excellent
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="Price" className="block mb-1 ml-1">
            Resale Price
          </label>
          <input
            id="Price"
            name="resalePrice"
            type="number"
            placeholder="Resale Price"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="originalPrice" className="block mb-1 ml-1">
            Original Price
          </label>
          <input
            id="Price"
            name="originalPrice"
            type="number"
            placeholder="Original Price"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="yearsOfUse" className="block mb-1 ml-1">
            Years of Use
          </label>
          <input
            id="yearsOfUse"
            name="yearsOfUse"
            type="number"
            step="0.01"
            placeholder="Years of Use"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1 ml-1">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="phoneNumber"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1 ml-1">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="location"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-yellow-400 focus:ring-violet-400 hover:bg-yellow-600 dark:text-gray-900"
          >
            Add Products
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProducts;
