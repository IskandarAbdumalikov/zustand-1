import React from "react";
import wishlistStore from "../../zustand/wishlistStore";
import Empty from "../../components/empty/Empty";
import "./wishlist.scss";
import { CiHeart } from "react-icons/ci";

const Wishlist = () => {
  const wishlist = wishlistStore((state) => state.wishlist);
  const toggle = wishlistStore((state) => state.toggle);

  const handleDislike = (item) => {
    toggle(item);
    let updatedWishlist = wishlist.filter((el) => el.id !== item.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist container">
      {wishlist?.length > 0 ? (
        <div className="wishlist__wrapper">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist__card">
              <img src={item.images[0]} alt={item.title} />
              <div className="wishlist__card__info">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <h3>{item.price} USD</h3>
                <button
                  className="dislike-btn"
                  onClick={() => handleDislike(item)}
                >
                  <CiHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Wishlist;
