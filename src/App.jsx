import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateProduct from "./pages/createProduct/CreateProduct";
import Header from "./components/layouts/header/Header";
import Wishlist from "./pages/wishlist/Wishlist";
import SingleProduct from "./pages/home/SingleProduct/SingleProduct";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>

    </Fragment>
  );
};

export default App;
