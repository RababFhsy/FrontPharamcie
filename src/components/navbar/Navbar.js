import styles from "./Navbar.module.css";
import cartIcon from "../../assets/shopping-bag.png";
import logo from "../../assets/keynote.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <navbar className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }} className={styles.listElement}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" style={{ textDecoration: "none" } } className={styles.listElement}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" style={{ textDecoration: "none" }} className={styles.listElement}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" style={{ textDecoration: "none" }} className={styles.listElement + " " + styles.button}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.cart} onClick={showCartHandler}>
          <img src={cartIcon} alt="Shopping bag"></img>
          <span>Checkout</span>
          <div>
            <span>2</span>
          </div>
        </div>
      </navbar>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
