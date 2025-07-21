import style from "../Header/Header.module.css";
import { Link} from "react-router-dom";
import logo from "../../assets/Home/01-Logo.svg";
import iconUser from "../../assets/Home/free-icon-font-user-3917559.png";
import iconCart from "../../assets/Home/free-icon-font-shopping-cart-3916598.png";
import iconWishlist from "../../assets/Home/free-icon-add-to-favorites-4989206.png";
import { selectCart } from "../../redux/sliceCart";
import { selectWishlist } from "../../redux/sliceWishlist";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/" className={style.link}>
          <img src={logo} alt="" className={style.imgLogo} />
        </Link>
        <Link to="/" className={style.link}>
          <p className={style.textNav}>Home</p>
        </Link>
        <Link to="/productsPage" className={style.link}>
          <p className={style.textNav}>All products</p>
        </Link>
        <Link to="/userPage" className={style.link}>
          <p className={style.textNav}>Profile</p>
        </Link>

        <div className={style.innerIcons}>
          <Link to="/registerPage" className={style.link}>
            <img className={style.icons} src={iconUser} alt="" />
          </Link>
          <Link to="/wishlistPage" className={style.link}>
            <span className={style.wishlistLength}>{wishlist.length}</span>
            <img className={style.iconWishlist} src={iconWishlist} alt="" />
          </Link>
          <Link to="/cartPage" className={style.link}>
            <span className={style.cartLength}>{cart.length}</span>
            <img className={style.iconCart} src={iconCart} alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
