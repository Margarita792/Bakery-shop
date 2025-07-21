import React from "react";
import TopProducts from "../../components/TopProducts/TopProducts";
import AboutUs from "../../components/AboutUs/AboutUs";
import FeaturedTrears from "../../components/FeaturedTrears/FeaturedTrears";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import MainPage from "../../components/MainPage/MainPage";
import style from "./HomePage.module.css";
// import style from "./Home.module.css";

function HomePage() {
  return (
    <>
    
        <Header />
          <main className={style.container}>
        <TopProducts />
        <AboutUs />
        <FeaturedTrears />
        <Footer />
      </main>
    </>
  );
}
export default HomePage;
