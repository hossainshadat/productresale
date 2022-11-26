import React from "react";

const CategoryModal = ({ singleProduct }) => {
  const {
    brandName,
    image_url,
    location,
    originalPrice,
    post_date,
    resalePrice,
    sellerName,
    title,
  } = singleProduct;
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{location}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
