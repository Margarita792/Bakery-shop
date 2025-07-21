import React from "react";
import style from './Wishlist.module.css'
import { selectWishlist, deleteProductFromWishlist } from "../../redux/sliceWishlist";
import { useSelector, useDispatch } from "react-redux";
import deleteIcon from '../../assets/Cart/trash-bin_449943.png'
import { addProduct } from "../../redux/sliceCart";
import { useNavigate } from "react-router-dom";
function Wishlist() {
    const wishlist = useSelector(selectWishlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (  <main className={style.mainContainer}>
        <h1 className={style.title}>Wishlist</h1>
<section className={style.wrapProductsCart}>

    {wishlist.map((item,id)=>{
      return(<>
        <div key = {id} className={style.innerProductsCart}>
            <img className={style.imgProductsCart} src={item.img} alt="" />
            <div className={style.innerNamePriceCart}>
            <h1 className={style.nameProductsCart}> {item.name}</h1>
            <p className={style.priceProductsCart}>${item.price}</p>
          
            </div>
            <div className={style.innerButtonIconDelete}>
            <img className={style.deleteIcon } src={deleteIcon } alt="deleteIcon" onClick = {()=>{dispatch(deleteProductFromWishlist(item))}}/>
          <button
                      className={style.btnAdd}
                      onClick={() => {
                        dispatch(addProduct(item));
                        navigate("/cartPage");
                      }}
                    >
                      Add
                    </button>
           </div>
        </div>
        
  </> ) })}
   
</section>
</main>)
}

export default Wishlist;
