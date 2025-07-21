import icon from "../../assets/OrderConfirmed/delivery_13349561.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./OrderConfirmedPage.module.css";
function OrderConfirmedPage() {
  return (<>
    <Header/>
    <div className={style.wrapOrderConfirmed}>
      <h1 className={style.titleOrderConfirmed}>Order Confirmed</h1>
      <img className={style.imgOrderConfirmed} src={icon} alt=""></img>
    </div>
    <Footer/>
  </>);
}

export default OrderConfirmedPage;
