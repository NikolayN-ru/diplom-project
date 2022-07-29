import { headerProp } from './header.interface';
import styles from './header.module.scss';
import Image from 'next/image'
import MenuHeader from './menu/menuHeader';
import Logo from '../components/logo';

const localState = ["Главная", "Подборки", "По жанру", "Фильмы", "Сериалы", "Мультфильмы", "Аниме", "Актеры"]

const Header = ({ link }: headerProp) => {
    return (
        <div className={styles.header}>
            <Logo/>
            <MenuHeader />
            <div className={styles.input}>
                <input type="text" placeholder='Поиск по сайту' />
                <Image src="/search.svg" width={25} height={25} />
            </div>
        </div>
    )
}
export default Header;
