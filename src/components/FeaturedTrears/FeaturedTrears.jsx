import React from "react";
import {selectProductsHomePage} from "../../redux/sliceProducts";
import { useSelector } from "react-redux";
import style from "./FeaturedTrears.module.css";
function FeaturedTrears() {
 const productsHomePage = useSelector(selectProductsHomePage); 
  return (
    <>
      <h1 className={style.title}>Featured Treats</h1>
      <main className={style.wrapCards}>
        {productsHomePage.slice(6, 9).map((item, index) => {
          return (
            <section key={index} className={style.innerCards}>
              <img className={style.imgCards} src={item.img} alt="" />
              <div className={style.innerNamePrice}>
                <h2 className={style.nameCards}>{item.name}</h2>
                <h3 className={style.priceCards}>${item.price}</h3>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
export default FeaturedTrears;
