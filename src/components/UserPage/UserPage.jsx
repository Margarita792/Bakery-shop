import { useSelector } from "react-redux";
import { selectCurrentUser, selectUser } from "../../redux/sliceUser";
import Header from "../Header/Header";
import style from "./UserPage.module.css";
import Footer from "../Footer/Footer";

function UserPage() {
  const user = useSelector(selectUser);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
    <div className = {style.container}>
      <Header />
      <section className={style.wrapperUserPage}>
        <h2 className={style.title}>Personal information</h2>
        {user.map((item, index) => {
          return (
            <div key={index} className={style.wrapUser}>
             {currentUser && (
  <div className={style.wrapUser}>
    <p className={style.name}>Name</p>
    <p className={style.value}>{currentUser.firstName}</p>
    <p className={style.name}>Last Name</p>
    <p className={style.value}>{currentUser.lastName}</p>
    <p className={style.name}>User name</p>
    <p className={style.value}>{currentUser.userName}</p>
    <p className={style.name}>Email</p>
    <p className={style.value}>{currentUser.email}</p>
    <p className={style.name}>Password</p>
    <p className={style.value}>{currentUser.password}</p>
  </div>
)}
            </div>
          );
        })}
      </section>
      <Footer />
      </div>
    </>
  );
}
export default UserPage;
