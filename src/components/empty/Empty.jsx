import React from "react";
import { Link } from "react-router-dom";
import "./empty.scss";

const Empty = () => {
  return (
    <div className="empty">
      <img
        src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-little-boy-with-an-empty-food-basket-picture-image_8480003.png"
        alt=""
      />
      <h1>Empty</h1>
      <Link to={"/"}>Start shopping</Link>
    </div>
  );
};

export default Empty;
