import Icon from "../Icon/Icon";
import styles from "./ItemCount.module.scss";



const ItemCount = ({ addCount, removeCount, count, min, max, children }: any) => {
  return (
    <div className={styles.itemCountWrapper}>
      <div className={styles.itemCount}>
        <button
          disabled={count === min}
          onClick={removeCount}
        >
          <Icon name="Remove"/>
        </button>
        <p> {count} </p>
        <button
          disabled={count === max}
          onClick={addCount}
        >
         <Icon name="Add"/>
        </button>
      </div>
      {children}
    </div>
  );
};

export default ItemCount;
