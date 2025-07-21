import React from "react";
import style from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { loginUser } from "../../redux/sliceUser";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(loginUser(data));
  return (
    <> 
    <section className={style.containerLogin}>
      <div  className={style.wrapLogin}>
        <p className={style.title}>Log in to your account</p>
         
        <form onSubmit={handleSubmit(onSubmit)} >
          
          <input className = {style.input}
            type="text"
            {...register("login", { required: true })}
            placeholder="Login"
          />
          <input className = {style.input}
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          <input className = {style.inputSubmit} type="submit" value="Ok"/>
        </form>
        
        <p className={style.text} onClick = {()=>navigate("/registerPage")}>Don’t have an account? Sign up now.</p>
       
      </div>
      </section>
    </>
  );
}

export default LoginPage;
