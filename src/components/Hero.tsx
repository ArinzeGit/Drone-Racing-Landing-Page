import styles from "./Hero.module.css";
import Logo from "./Logo";

interface Props {
  title: string;
  text: string;
  ImgComponent: React.ComponentType;
}

const Hero = ({ title, text, ImgComponent }: Props) => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <Logo />
        </div>
        <div className={styles["hero-writeups"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <p className={styles["text"]}>{text}</p>
        </div>
        <div className={styles["img-component"]}>
          <ImgComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
