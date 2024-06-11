import React, { useEffect, useState } from "react";
import "./products.scss";
import { NavLink } from "react-router-dom";
import productStore from "../../zustand/productStore";
import wishlistStore from "../../zustand/wishlistStore";
import EditModule from "../module/EditModule";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Products = () => {
  const productsData = productStore((state) => state.products);
  const fetchProducts = productStore((state) => state.fetchProducts);
  const deleteProduct = productStore((state) => state.deleteProduct);
  const [showModule, setShowModule] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  let fetchSingleProduct = productStore((state) => state.fetchSingleProduct);
  const toggle = wishlistStore((state) => state.toggle);

  const [likedProducts, setLikedProducts] = useState({});
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
    setShowModule(true);
  };

  const handleLike = (product) => {
    setLikedProducts((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));
    toggle(product);
  };

  return (
    <div className="products__wrapper">
      <div className="products">
        {productsData?.slice(0, 8 * offset).map((product) => (
          <div key={product.id} className="product__card">
            <NavLink
              onClick={() => fetchSingleProduct(product.id)}
              to={`/singleProduct/${product.id}`}
            >
              <img src={product.images[0]} alt="" />
            </NavLink>
            <div className="product__card__info">
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <h2>{product.brand}</h2>
              <h3>{product.price} USD</h3>
              <div className="product__card__info__btns">
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick(product.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="like-btn"
                  onClick={() => handleLike(product)}
                >
                  {likedProducts[product.id] ? <FaHeart /> : <CiHeart />}
                </button>
              </div>
            </div>
          </div>
        ))}
        {showModule && (
          <EditModule
            productId={selectedProductId}
            onClose={() => setShowModule(false)}
          />
        )}
        {showModule && (
          <div onClick={() => setShowModule(false)} className="overlay"></div>
        )}
      </div>
      <button
        className={
          productsData?.length / 8 > offset ? "see-btn" : "see-btn disabled"
        }
        onClick={() => setOffset((p) => p + 1)}
      >
        {productsData?.length / 8 > offset ? "See more" : "No other products"}
      </button>
    </div>
  );
};

export default Products;
