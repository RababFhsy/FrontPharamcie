import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.product.image} alt="Avatar" className={styles.img} />
      <div className={styles.container}>
        <h4>
          <b>{props.product.title}</b>
        </h4>
        <p>{props.product.category}</p>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
