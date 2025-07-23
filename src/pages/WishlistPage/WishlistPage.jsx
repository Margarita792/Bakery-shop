import React from "react";
import Header from "../../components/Header/Header";
import Wishlist from "../../components/Wishlist/Wishlist";
import Footer from "../../components/Footer/Footer";
import style from "./WishlistPage.module.css";
function WishlistPage() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Wishlist />
        <Footer />
      </div>
    </>
  );
}

export default WishlistPage;
