import { headerProp } from './header.interface';
import styles from './header.module.scss';

const Header = ({ link }: headerProp) => {
    return (
        <div className={styles.header}>
            <p>
                Header - {link}
            </p>
        </div>
    )
}
export default Header;