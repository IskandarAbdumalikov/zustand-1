import React from "react";
import "./singleProduct.scss";
import { useParams } from "react-router-dom";
import productStore from "../../../zustand/productStore";

const SingleProduct = () => {
  let singleProduct = productStore((state) => state.product);
  console.log(singleProduct);

  return (
    <div className="single__page container">
      <div className="single__page__left">
        <img src={singleProduct?.images[0]} alt="" />
      </div>
      <div className="single__page__right">
        <h2>{singleProduct?.title}</h2>
        <h1>{singleProduct?.brand}</h1>
        <p>{singleProduct?.desc}</p>
        <h2>Discount: {singleProduct?.discount} $</h2>
        <h1>{singleProduct?.price} USD</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
