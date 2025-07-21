import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItems from "../../components/CartItems/CartItems";

function CartPage() {
  return (
    <>
      <Header />
      <CartItems/>
      <Footer />
    </>
  );
}

export default CartPage;
