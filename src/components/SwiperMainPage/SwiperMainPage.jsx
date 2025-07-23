import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import style from "./SwiperMainPage.module.css";
import { useNavigate } from 'react-router-dom';
function SwiperMainPage() {
    const navigate = useNavigate();
  return (
    <Swiper
      modules={[Navigation,  Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }} speed={1500} 
    >
      <SwiperSlide>
        <div className={style.wrapSlide1}>
            <div className = {style.blackout}>
          <h2 className={style.title}>Freshly Baked Daily!</h2>
          <button className={style.button} onClick={()=>{navigate("/productsPage")}}>View More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.wrapSlide2}>
            <div className = {style.blackout}>
          <h2 className={style.title}>Baked to Perfection!</h2>
          <button className={style.button} onClick={()=>{navigate("/productsPage")}}>Order Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.wrapSlide3}>
            <div className = {style.blackout}>
          <h2 className={style.title}>New baking technology!</h2>
          <button className={style.button} onClick={()=>{navigate("/productsPage")}}>Place Order</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default SwiperMainPage;
