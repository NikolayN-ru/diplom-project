import Logo from '../components/logo';
import { footerProp } from './footer.interface';
import styles from './footer.module.scss';
import MenuFooter from './menuFooter';
import Image from 'next/image'

const Footer = ({ link }: footerProp) => {
    return (
        <div className={styles.footer}>s
            <div className={styles.top}>

                <div className={styles.menuLeft}>
                    <Logo />
                    <MenuFooter />
                </div>
                <ul className={styles.menuRigth}>
                    <p>О нас</p>
                    <li>Зная всё о кино, хочется поделиться этим с другими. Делитесь фильмами, трейлерами, персонами и новостями в социальных сетях, присваивайте рейтинги фильмам и обсуждайте их с друзьями и подписчиками!</li>
                    <li>Интересные фильмы, ближайшие кинотеатры и любимых актеров можно добавлять в «Избранное». Система покажет все связанные с ними новости и новые трейлеры, подскажет, когда можно купить билет в кино на интересующую премьеру. Присоединяйтесь!</li>
                </ul>
            </div>
            <div className={styles.down}>
                <p>©Все права защищены MovieDB.ru 2021</p>
                <div className={styles.messagers}>
                    <Image src="/facebook.svg" alt="Ve" width="100%" height="100%" />
                    <Image src="/instagram.svg" alt="Ve" width="100%" height="100%" />
                    <Image src="/vk.svg" alt="Ve" width="100%" height="100%" />
                </div>
                <a href="#">Политика конфиденциальности</a>
            </div>
        </div>
    )
}
export default Footer;
