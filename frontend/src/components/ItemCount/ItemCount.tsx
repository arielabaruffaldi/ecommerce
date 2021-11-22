import styles from "./ItemCount.module.scss";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


const ItemCount = ({ addCount, removeCount, count, min, max, children }: any) => {
  return (
    <div className={styles.itemCountWrapper}>
      <div className={styles.itemCount}>
        <button
          disabled={count === min}
          onClick={removeCount}
        >
          <RemoveIcon />
        </button>
        <p> {count} </p>
        <button
          disabled={count === max}
          onClick={addCount}
        >
          <AddIcon />
        </button>
      </div>
      {children}
    </div>
  );
};

export default ItemCount;
