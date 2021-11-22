import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/products';
import styles from './Item.module.scss';

const Item = ({ id, thumbnail, name, price }: Product) => {
    return (
        <li className={styles.Item}>
            <Link to={`/item/${id}`}>
                <img src={`${thumbnail}`} alt={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{`$${price}`}</p>
                </div>
            </Link>
        </li>
    )
}

export default Item;