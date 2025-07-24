import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoginPage from "../../components/LoginPage/LoginPage";
import style from './AccountPage.module.css';
function AccountPage() {
  return (
    <>
<div className ={style.container}>
      <Header />
      <LoginPage />
      <Footer />
      </div>
    </>
  );
}

export default AccountPage;
