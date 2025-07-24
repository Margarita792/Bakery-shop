import style from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectallProducts, sortCategoryProducts } from "../../redux/sliceProducts";
import Header from "../../components/Header/Header";
import Sort from "../../components/Sort/Sort";
import Footer from "../../components/Footer/Footer";
import { selectSearch } from "../../redux/sliceProducts";
import { addProduct } from "../../redux/sliceCart";
import favorite from '../../assets/Home/free-icon-favorite-4202721.png'
import { addToWishlist } from "../../redux/sliceWishlist";
function ProductsPage() {
  const allProducts = useSelector(selectallProducts);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  return (
    <>
    <div className = {style.container}>
      <Header />
      <main className={style.mainWrap}>
        <section className={style.categories} >
          {["All","Cake","Muffins", "Croissant", "Bread"].map((category)=>{
            return(
              <p key = {category} className={style.textCategories} onClick={()=>{dispatch(sortCategoryProducts({value:category}))}}>{category}</p>
            )
          })}
        </section>

        <Sort />
        <section className={style.wrapCards}>
          {allProducts
            .filter((item) => {
              return item.name.includes(search);
            })
            .map((item, index) => {
              return (
                <div key={index} className={style.innerCards}>
                  <img className={style.imgCards} src={item.img} alt="" />
                  
                  <h2 className={style.nameCards}>{item.name}</h2>
                  <div className={style.innerPriceButton}>
                    <p className={style.priceCards}>${item.price}</p>
                    <img className={style.iconFavoriteCards}src={favorite} alt="favorite" onClick={() => {
                        dispatch(addToWishlist(item));
                      }}/>
                    <button
                      className={style.btnCards}
                      onClick={() => {
                        dispatch(addProduct(item));
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })}
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default ProductsPage;
