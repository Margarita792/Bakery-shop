import React from "react";
import TopProducts from "../../components/TopProducts/TopProducts";
import AboutUs from "../../components/AboutUs/AboutUs";
import FeaturedTrears from "../../components/FeaturedTrears/FeaturedTrears";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./HomePage.module.css";
import SwiperMainPage from "../../components/SwiperMainPage/SwiperMainPage";
import Category from "../../components/Category/Category";
// import style from "./Home.module.css";

function HomePage() {
  return (
    <>
      <main className={style.mainContainerHomePage}>
        <Header />
        <div className={style.wrapHomePage}>
            <SwiperMainPage/>
            <Category/>
        <AboutUs />
        {/* <TopProducts /> */}
        {/* <FeaturedTrears /> */}
        </div>
        <Footer />
      </main>
    </>
  );
}
export default HomePage;
