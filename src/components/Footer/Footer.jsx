import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/Footer/01-Logo.svg";
import icon1 from "../../assets/Footer/Group 503.png";
import icon2 from "../../assets/Footer/Group.png";
import icon3 from "../../assets/Footer/Vector1.png";
import icon4 from "../../assets/Footer/Vector.png";
import icon5 from "../../assets/Footer/foni-papik-pro-gbsp-p-kartinki-mastercard-na-prozrachnom-fone-24.png";
import icon7 from "../../assets/Footer/paypal-registration-s.jpg";
import icon6 from "../../assets/Footer/visa.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={style.wrap}>
        <header className={style.header}>
          <Link to="/">
            <img className={style.logo} src={logo} alt="" />
          </Link>
          <nav className={style.navMenu}>
            <p className={style.textNavMenu}>Follow us</p>
            <img className={style.icon} src={icon1} alt="" />
            <img className={style.icon} src={icon2} alt="" />
            <img className={style.icon} src={icon3} alt="" />
            <img className={style.icon} src={icon4} alt="" />
          </nav>
        </header>
        <main className={style.main}>
          <section>
            <h2 className={style.title}>About Us</h2>
            <p className={style.text}>(456) 789-12301</p>
            <p className={style.text}>info@bakery.co.uk</p>
            <p className={style.text}>South 13th street</p>
            <p className={style.text}>New-York, USA</p>
          </section>
          <section>
            <h2 className={style.title}>Explore</h2>
            <p className={style.text}>Home</p>
            <p className={style.text}>Blog</p>
            <p className={style.text}>Contact us</p>
            <p className={style.text}>Services</p>
          </section>
          <section className={style.payment}>
            <h2 className={style.title}>Payment</h2>
            <img className={style.iconPayment} src={icon5} alt="" />
            <img className={style.iconPayment} src={icon6} alt="" />
            <img className={style.iconPayment} src={icon7} alt="" />
          </section>
        </main>
        <h2 className={style.textFooter}>© 2025 Bakery 100% Quality. All rights reserved</h2>
      </div>
    </>
  );
}

export default Footer;
