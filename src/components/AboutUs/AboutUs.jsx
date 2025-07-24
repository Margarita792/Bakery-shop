import React from "react";
import style from "./AboutUs.module.css";
import pancake from '../../assets/AboutUs/pexels-chokniti-khongchum-1197604-2280545.jpg';
function AboutUs() {
  return (
    <main className={style.wrap}>
      <section>
        <img className={style.img} src={pancake} alt="pancake" />
      </section>
      <section className={style.inner}>
        <h1 className={style.title}>About us</h1>
        <p className={style.text}>
          At our Bakery, we believe that every bite should bring joy. Our
          journey began with a simple love for homemade pastries, and today we
          share that passion with you through every cake, muffin, and loaf we
          make. We use only the finest ingredients, traditional recipes, and a
          pinch of love in everything we bake. Whether you're celebrating a
          special occasion or just treating yourself, we're here to make your
          day a little sweeter. Thank you for choosing us to be part of your
          sweetest moments. Welcome to the family!
        </p>
      </section>
    </main>
  );
}
export default AboutUs;
