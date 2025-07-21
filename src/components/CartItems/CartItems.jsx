import deleteIcon from '../../assets/Cart/trash-bin_449943.png'
import style from "./CartItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeQtyItemProduct, selectCart, decrementQtyProductItem,incrementQtyProductItem,deleteProductItem} from "../../redux/sliceCart";
import TotalPrice from './TotalPrice/TotalPrice';
function CartItems() {
   const cart = useSelector(selectCart);
   const dispatch = useDispatch();
  return (
    <main className={style.mainContainer}>
        <h1 className={style.title}>Cart</h1>
<section className={style.wrapProductsCart}>

    {cart.map((item,id)=>{
      return(
        <div key = {id} className={style.innerProductsCart}>
            <img className={style.imgProductsCart} src={item.img} alt="" />
            <div className={style.innerNamePriceCart}>
            <h1 className={style.nameProductsCart}> {item.name}</h1>
            <p className={style.priceProductsCart}>${item.price}</p>
            
            <div className={style.innerQtyProductsCart}>
              <button className={style.btnMinusQty} onClick= {()=>{dispatch(decrementQtyProductItem(item))}}>-</button>
              <input className={style.inputQtyProductCart} value = {item.quantity}  onChange = {(e)=>{dispatch(changeQtyItemProduct( { id: item.id, value: e.target.value }))}} type="number" />
              <button className={style.btnPlusQty} onClick = {()=>{dispatch(incrementQtyProductItem(item))}}>+</button>
            </div>
            </div>
            <div className={style.innerTotalPriceIconDelete}>
            <img className={style.deleteIcon } src={deleteIcon } alt="deleteIcon" onClick = {()=>{dispatch(deleteProductItem(item))}}/>
              <p className={style.totalPriceItemProduct}>${(item.price*item.quantity)}</p>
            </div>
        </div>
   ) })}
</section>
<TotalPrice/>
</main>
  )
}

export default CartItems;
