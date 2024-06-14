import styles from "./FootageSection.module.css";
interface Props {
  title: string;
  text1: string;
  text2: string;
  footage1Src: string;
  footage2Src: string;
  footage3Src: string;
  footage4Src: string;
  footage5Src: string;
}
const FootageSection = ({
  title,
  text1,
  text2,
  footage1Src,
  footage2Src,
  footage3Src,
  footage4Src,
  footage5Src,
}: Props) => {
  return (
    <div className={styles["footage-section"]}>
      <div className={styles["text-container"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["text"]}>{text1}</p>
        <p className={styles["text"]}>{text2}</p>
      </div>
      <div className={styles["gallery"]}>
        <img src={footage1Src} alt="footage1" />
        <img src={footage2Src} alt="footage2" />
        <img src={footage3Src} alt="footage3" />
        <img src={footage4Src} alt="footage4" />
        <img src={footage5Src} alt="footage5" />
      </div>
    </div>
  );
};

export default FootageSection;
