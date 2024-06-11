import React, { useState } from "react";
import productStore from "../../zustand/productStore";
import "./createProuct.scss";
const initialState = {
  title: "",
  desc: "",
  brand: "",
  price: "",
  images: "",
};

const CreateProduct = () => {
  const [product, setProduct] = useState(initialState);

  const addProduct = productStore((state) => state.addProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("desc", product.desc);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("images", product.images);

    const payload = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      brand: formData.get("brand"),
      price: formData.get("price"),
      images: [formData.get("images")],
    };

    addProduct(payload);
    setProduct(initialState);
  };

  return (
    <form className="create__product" onSubmit={handleSubmit}>
      <h2>Add new product</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="desc"
          value={product.desc}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="images"
          value={product.images}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateProduct;
