import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItems from "../../components/CartItems/CartItems";
import style from './CartPage.module.css';
// max(100vh, 100%)
function CartPage() {
  return (
    <>
    <div className = {style.container}>
      <Header />
      <CartItems/>
      <Footer />
      </div>
    </>
  );
}

export default CartPage;
