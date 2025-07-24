import style from "./RegisterPage.module.css";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/sliceUser";
function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
  };

  return (
    <>
    <div className={style.mainContainer}>
      <Header />
      <section className={style.containerRegister}>
        <p className={style.title}>Create an Account</p>
        <div className={style.wrapRegister}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className={style.input}
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First name"
            />
            <input
              className={style.input}
              {...register("lastName", { required: true })}
              type="text"
              placeholder="Last name"
            />
            <input
              className={style.input}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className={style.textError}>{errors.Email.message ||"This field is required}This field is required"}</p>
            )}
             <input
              className={style.input}
              {...register("userName", { required: true })}
              type="text"
              placeholder="User name"
            />
            <input
              className={style.input}
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className={style.textError}>This field is required</p>
            )}
            <input
              className={style.input}
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className={style.textError}>This field is required</p>
            )}
            <input className={style.inputSubmit} type="submit" value="Create" />
          </form>
        </div>
        <p
          className={style.text}
          onClick={() => {
            navigate("/accountPage");
          }}
        >
          Already have an account? Log in here.
        </p>
      </section>
      <Footer />
      </div>
    </>
  );
}
export default RegisterPage;
