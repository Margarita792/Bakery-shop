import style from "./TotalPrice.module.css";
import { selectCart } from "../../../redux/sliceCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function TotalPrice() {
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const totalPriceCart = () => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  };
  return (
    <div className={style.wrapTotalPrice}>
      <p className={style.titleTotalPrice}>Total price:</p>
      <p className={style.valueTotalPrice}> ${totalPriceCart()}</p>
      <button
        className={style.buttonTotalPrice}
        onClick={() => {
          navigate("/orderConfirmedPage");
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default TotalPrice;
