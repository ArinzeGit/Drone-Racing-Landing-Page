import styles from "./Nav.module.css";
import menuIconSrc from "../assets/img/hamburgerIcon.svg";
import closeIconSrc from "../assets/img/closeIcon.svg";
import { useState } from "react";

const Nav = () => {
  let [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <div className={styles["nav"]}>
      <button
        className={styles["menu-button"]}
        onClick={() => setMenuVisibility(true)}
      >
        <img src={menuIconSrc} alt="Menu Button" />
      </button>

      <div
        className={`${styles.menu} ${
          menuVisibility ? styles.visible : styles.hidden
        }`}
      >
        <button
          className={styles["close-button"]}
          onClick={() => setMenuVisibility(false)}
        >
          <img src={closeIconSrc} alt="Close button" />
        </button>
        <a className={styles["menu-item"]} href="#">
          Home
        </a>
        <a className={styles["menu-item"]} href="#">
          Races
        </a>
        <a className={styles["menu-item"]} href="#">
          Register
        </a>
        <a className={styles["menu-item"]} href="#">
          Faq
        </a>
        <a className={styles["menu-item"]} href="#">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
