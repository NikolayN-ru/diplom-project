import { FC } from "react";
import styles from "./item.module.scss";
import Image from 'next/image'


const Item: FC<any> = ({ item }): JSX.Element => {
    return (
        <div className={styles.item}>
            <Image src="/item.png" alt="Ve" width="245" height="381" />
            <p>Механик</p>
            <p>2020, Драма, США</p>
            <div className={styles.play}>
                <Image src="/play.svg" alt="Ve" width="54" height="41" />
                <p>Смотреть</p>
            </div>
            <div className={styles.badges}>
                <div className={styles.badge}>
                    <div className={styles.startBadge}>
                        <Image src="/badgeKino.png" alt="Ve" width="34" height="34" />

                    </div>
                    <div className={styles.endBadge}>
                        <p>4.8</p>

                    </div>
                </div>
                <div className={styles.badge}>
                    <div className={styles.startBadge}>
                        <Image src="/badgeIMDb.png" alt="Ve" width="34" height="34" />

                    </div>
                    <div className={styles.endBadge}>
                        <p>4.7</p>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Item;