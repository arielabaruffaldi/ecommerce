import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/products';
import styles from './Item.module.scss';
import Button from './../Button/Button'

interface ItemProps extends Product {
    deleteAction?: () => void
}

const Item = ({ id, thumbnail, name, price, deleteAction }: ItemProps) => {
    return (
        <li className={styles.Item}>
            <Link to={`/item/${id}`}>
                <img src={`${thumbnail}`} alt={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{`$${price}`}</p>
                </div>
                {deleteAction && <Button type="tertiary" onClick={deleteAction}>Eliminar</Button>}
            </Link>
        </li>
    )
}

export default Item;