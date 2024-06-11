import React, { useState, useEffect } from "react";
import productStore from "../../zustand/productStore";
import "./editModule.scss";

const EditModule = ({ productId, onClose }) => {
  const [product, setProduct] = useState(null);
  const updateProduct = productStore((state) => state.updateProduct);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://66458542b8925626f892194e.mockapi.io/api/v1/products/${productId}`
      );
      const data = await res.json();
      setProduct(data);
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productId, product);
    onClose();
  };

  if (!product) return null;

  return (
    <form className="edit__module" onSubmit={handleSubmit}>
      <h2>Editing</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="desc"
          value={product.desc}
          onChange={handleChange}
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditModule;
