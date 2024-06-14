import Hero from "./components/Hero";
import Drone from "./components/Drone";
import Nav from "./components/Nav";
import styles from "./App.module.css";
import QuoteSection from "./components/QuoteSection";
import FootageSection from "./components/FootageSection";
import footage1 from "./assets/img/footage-1.png";
import footage2 from "./assets/img/footage-2.png";
import footage3 from "./assets/img/footage-3.png";
import footage4 from "./assets/img/footage-4.png";
import footage5 from "./assets/img/footage-5.png";
import EmailSignUp from "./components/EmailSignUp";

const App = () => {
  return (
    <div>
      <header className={styles["header"]}>
        <div className={styles["hero"]}>
          <Hero
            title="DRONE RACING GONE WILD"
            text="Register now for the ultimate drone racing event. 5 mile courses and over $10 million in prize money!"
            ImgComponent={Drone}
          />
        </div>
        <div className={styles["nav"]}>
          <Nav />
        </div>
      </header>
      <main>
        <div className={styles["quote-section"]}>
          <QuoteSection
            quote="the stadium is simply unreal. scrimba hall will make this the best drone racing event ever, period."
            author="anonymous guy"
          />
        </div>
        <div className={styles["footage-section"]}>
          <FootageSection
            title="last year’s footage"
            text1="With over 5,000 participants, 2020 featured some of the most amazing drone races from the most competitive field ever seen."
            text2="In 2021, we’re about to double the excitement with 10,000 race participants and 100,000 fans!"
            footage1Src={footage1}
            footage2Src={footage2}
            footage3Src={footage3}
            footage4Src={footage4}
            footage5Src={footage5}
          />
        </div>
      </main>
      <footer>
        <EmailSignUp
          contactPhone="1-555-555-3298"
          contactEmail="some@email.com"
        />
      </footer>
    </div>
  );
};

export default App;
