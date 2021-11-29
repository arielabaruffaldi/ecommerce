import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/products';
import styles from './Item.module.scss';
import Button from './../Button/Button'

interface ItemProps extends Product {
    deleteAction?: () => void
}

const Item = ({ id, thumbnail, name, price, quantity, deleteAction }: ItemProps) => {
    return (
        <li className={styles.Item}>
            <Link to={!deleteAction ? `/item/${id}` : ''}>
                <img src={`${thumbnail}`} alt={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{`$${price}`}</p>
                    {quantity && <span>{`${quantity} u.`}</span>}
                </div>
                {deleteAction && <Button variation="tertiary" onClick={deleteAction}>Eliminar</Button>}
            </Link>
        </li>
    )
}

export default Item;