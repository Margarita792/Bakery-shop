import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsHomePage } from "../../redux/sliceProducts";
import style from "../../components/TopProducts/TopProducts.module.css";
import { addProduct } from "../../redux/sliceCart";
function TopProducts() {
  const dispatch = useDispatch();
  const productsHomePage = useSelector(selectProductsHomePage); 
  return (
    <>
      <main className={style.container}>
        {/* <h1 className={style.title}>Top Products</h1> */}
        <section className={style.wrapCards}>
          {productsHomePage.slice(0, 6).map((item, index) => {
            return (
              <>
                <section key={index} className={style.innerCards}>
                  <div className={style.innerImg}>
                    <img className={style.imgCards} src={item.img} alt="" />
                  </div>
                  <p className={style.nameCards}>{item.name}</p>
                  <div className={style.innerPriceButton}>
                    <p className={style.priceCards}>${item.price}</p>
                    <button
                      className={style.btnCards}
                      onClick={()=>{dispatch(addProduct(item))}}
                    >
                      Buy
                    </button>
                  </div>
                </section>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default TopProducts;
