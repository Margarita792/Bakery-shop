import style from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Home/01-Logo.svg";
import iconUser from "../../assets/Home/free-icon-user-15745948.png";
import iconCart from "../../assets/Home/free-icon-cart-5335317.png";
import iconWishlist from "../../assets/Home/free-icon-love-2401368.png";
import { selectCart } from "../../redux/sliceCart";
import { selectWishlist } from "../../redux/sliceWishlist";
import { useSelector } from "react-redux";
import { useState } from "react";
function Header() {
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/" className={style.link}>
          <img src={logo} alt="" className={style.imgLogo} />
        </Link>

 <div className={`${style.menu} ${menuVisible ? style.show : ""}`}>
        <Link to="/" className={style.link}>
          <p className={style.textNav}>Home</p>
        </Link>
        <Link to="/productsPage" className={style.link}>
          <p className={style.textNav}>All products</p>
        </Link>
        <Link to="/accountPage" className={style.link}>
          <p className={style.textNav}>Profile</p>
        </Link>
</div>
        <div className={style.innerIcons}>
          <Link to="/registerPage" className={style.link}>
            <img className={style.iconUser} src={iconUser} alt="User" />
          </Link>
          <Link to="/wishlistPage" className={style.link}>
            <span className={style.wishlistLength}>{wishlist.length}</span>
            <img className={style.iconWishlist} src={iconWishlist} alt="Wishlist" />
          </Link>
          <Link to="/cartPage" className={style.link}>
            <span className={style.cartLength}>{cart.length}</span>
            <img className={style.iconCart} src={iconCart} alt="Cart" />
          </Link>
        </div>

        <button
  className={`${style.burger} ${menuVisible ? style.active : ""}`}
  onClick={() => setMenuVisible(!menuVisible)}
>
          <span className = {style.lineBurger}></span>
          <span className = {style.lineBurger}></span>
          <span className = {style.lineBurger}></span>
        </button>
      </nav>
    </header>
  );
}
export default Header;
