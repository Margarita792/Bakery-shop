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
      <Header />
      <section className={style.containerUserPage}>
        <h2 className={style.title}>Personal information</h2>
        {user.map((item, index) => {
          return (
            <div key={index} className={style.wrapUser}>
              {currentUser && <>
              </>}
              <p className={style.name}>Name</p>
              <p className={style.value}>{item.firstName}</p>
              <p className={style.name}>Last Name</p>
              <p className={style.value}>{item.lastName}</p>
              <p className={style.name}>User name</p>
              <p className={style.value}>{item.userName}</p>
              <p className={style.name}>Email</p>
              <p className={style.value}>{item.email}</p>
              <p className={style.name}>Password</p>
              <p className={style.value}>{item.password}</p>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default UserPage;
