import cover from "../../assets/happyFamily.jpg";
import styles from "./LandingImage.module.css";
const LandingImage = () => {
  const divStyle = {
    width: "100%",
    height: "90vh",
    background: `linear-gradient(40deg, rgba(232, 241, 245, 0.5), rgba(0, 86, 145, 0.5)), url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "30% 30%",
  };
  return <div className={styles.container} style={divStyle}>
    <h1>SHIRTLY Enjoy Every Moment</h1>
    <h3>Made with love </h3>
  </div>;
};

export default LandingImage;
