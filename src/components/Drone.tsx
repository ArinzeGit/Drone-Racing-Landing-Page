import droneBody from "../assets/img/drone.png";
import droneShadow from "../assets/img/drone-shadow.png";
import styles from "./Drone.module.css";
const Drone = () => {
  return (
    <div className={styles["drone"]}>
      <img
        className={styles["drone-shadow"]}
        src={droneShadow}
        alt="Drone Shadow"
      />
      <img className={styles["drone-body"]} src={droneBody} alt="Drone Body" />
    </div>
  );
};

export default Drone;
