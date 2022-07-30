// import Logo from '../components/logo';
// import { footerProp } from './menuFooter.interface';
import styles from './menuFooter.module.scss';

const localState = ["Главная", "Подборки", "По жанру", "Фильмы", "Сериалы", "Мультфильмы", "Аниме", "Актеры"]


const MenuFooter = () => {
    return (
        <ul className={styles.menu}>
            <div className={styles.menuLeft}>
                <p>Menu</p>
                {localState.map((item, id) => <li key={id}>{item}</li>)}
            </div>
        </ul>
    )
}
export default MenuFooter;
