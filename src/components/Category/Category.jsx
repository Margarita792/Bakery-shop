import React from "react";
import style from "./Category.module.css";
import cake from '../../assets/Category/delicious-chocolate-birthday-cake-with-candles.png';
import muffins from '../../assets/Category/409991117_c5114b2d-479e-4576-a6d4-639ff117f4db-removebg-preview.png';
import croissant from '../../assets/Category/406619397_f196003b-d4cf-4e01-8819-0a6e480a7f3a-removebg-preview.png';
import bread from '../../assets/Category/—Pngtree—white bread loaf with three_20313466.png';
import { useDispatch } from "react-redux";
import { sortCategoryProducts } from "../../redux/sliceProducts";
import { useNavigate } from "react-router-dom";
function Category() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
  return (
    <main className = {style.mainContainer} >
      <section className = {style.wrapCategory} onClick={()=>{dispatch(sortCategoryProducts({value:"Cake"}));navigate("/productsPage")}}>
        <img src={cake} alt="Cake" className = {style.img}/>
        <h1 className = {style.title}>Cake</h1>
      </section>
      <section className = {style.wrapCategory} onClick ={()=>{dispatch(sortCategoryProducts({value:"Muffins"}));navigate("/productsPage")}}>
        <img src={muffins} alt="Muffins" className = {style.img}/>
        <h1 className = {style.title}>Muffins</h1>
      </section>
      <section className = {style.wrapCategory} onClick ={()=>{dispatch(sortCategoryProducts({value:"Croissant"}));navigate("/productsPage")}}>
        <img src={croissant} alt="Croissant" className = {style.img}/>
        <h1 className = {style.title}>Croissant</h1>
      </section>
      <section className = {style.wrapCategory} onClick ={()=>{dispatch(sortCategoryProducts({value:"Bread"}));navigate("/productsPage")}}>
        <img src={bread} alt="Bread" className = {style.img}/>
        <h1 className = {style.title}>Bread</h1>
      </section>
    </main>
  );
}

export default Category;
