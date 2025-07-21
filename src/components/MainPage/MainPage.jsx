import React from 'react'
import style from '../MainPage/MainPage.module.css'
function MainPage() {
  return (<>
  {/* <main className = {style.main}> */}
     <section className={style.info}>
          <h4 className={style.subTitle}> Delicious Shop</h4>
          <h1 className={style.mainTitle}>Sweet Treats, Perfect Eats</h1>
        </section>
        <section className={style.actions}>
          <button className={style.button}>Shop Now</button>
          <p className={style.learnMore}>Learn More</p>
        </section>
        {/* </main> */}
 </> )
}

export default MainPage