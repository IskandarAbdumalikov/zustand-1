import wishlistStore from "../../../zustand/wishlistStore";
import React, { useState } from "react";
import "./header.scss";
import search from "../../../assets/search.svg";
import { NavLink } from "react-router-dom";
import productStore from "../../../zustand/productStore";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const wishlist = wishlistStore((state) => state.wishlist);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `https://66458542b8925626f892194e.mockapi.io/api/v1/products?search=${searchTerm}`
      );
      const data = await res.json();
      productStore.setState({ products: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setSearchTerm("");
    }
  };

  return (
    <header>
      <nav className="header__nav container">
        <img
          width={100}
          className="header__nav__logo"
          src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
          alt=""
        />
        <form
          className="header__nav__search__form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            placeholder="Search..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img width={20} src={search} alt="" />
          </button>
        </form>
        <ul className="header__nav__list">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/create"}>Create</NavLink>
          <NavLink to={"/wishlist"}>
            Wishlist
            <sup>{wishlist ? wishlist.length : 0}</sup>
          </NavLink>
        </ul>

        <button className="header__nav__btn">Admin</button>
      </nav>
    </header>
  );
};

export default Header;
