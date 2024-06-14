import styles from "./QuoteSection.module.css";
interface Props {
  quote: string;
  author: string;
}
const QuoteSection = ({ quote, author }: Props) => {
  return (
    <div className={styles["quote-section"]}>
      <div className={styles["container"]}>
        <blockquote className={styles["quote"]}>{`“${quote}”`}</blockquote>
        <cite className={styles["author"]}>{`${author}`}</cite>
      </div>
    </div>
  );
};

export default QuoteSection;
