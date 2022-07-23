import { footerProp } from './footer.interface';
import styles from './footer.module.scss';

const Footer = ({ link }: footerProp) => {
    return (
        <div className={styles.footer}>
            <p>
                Footer - {link}
            </p>
        </div>
    )
}
export default Footer;