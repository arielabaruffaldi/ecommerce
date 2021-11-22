import Button from '../../components/Button/Button';
import ItemList from '../../components/ItemList/ItemList';
import fondo from './../../assets/images/home.png';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <>
            <section className={styles['Home']}>
                <div></div>
                <p>
                    trending <span>collection</span>
                </p>
                <h1>
                    Redescubrí <span>tus espacios</span>
                </h1>
                <Button
                    href="#test"
                >
                    ver colección
                </Button>
                <img src={fondo} alt="home fondo" />
            </section>
            <ItemList />
        </>
    );
}

export default Home