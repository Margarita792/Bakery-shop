import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserPage from "./components/UserPage/UserPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import OrderConfirmedPage from "./pages/OrderConfirmedPage/OrderConfirmedPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import CurrentUser from "./components/CurrentUser/CurrentUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/productsPage" element={<ProductsPage />}></Route>
          <Route path="/accountPage" element={<AccountPage />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
          <Route path="/registerPage" element={<RegisterPage />}></Route>
          <Route path="/userPage" element={<UserPage />}></Route>
          <Route path="/currentUser" element={<CurrentUser />}></Route>
          <Route path="/cartPage" element={<CartPage />}></Route>
          <Route path="/orderConfirmedPage" element={<OrderConfirmedPage />}></Route>
          <Route path="/wishlistPage" element = {<WishlistPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
