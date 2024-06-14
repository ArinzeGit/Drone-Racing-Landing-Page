import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <p className={styles["logo"]}>
      <span style={{ color: "#4b48e4" }}>DRONE</span>
      .SERIES
    </p>
  );
};

export default Logo;
