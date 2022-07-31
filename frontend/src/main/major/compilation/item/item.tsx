import { FC } from "react";
import styles from "./item.module.scss";
import Image from 'next/image'
import Link from "next/link";

const defaultImage = "http://backend:8000/media/image/2022/07/30/Rectangle_8-10.png"

const Item: FC<any> = ({ item: { pk, title, image = defaultImage, year_prod, category, raiting_kino, raiting_imdb } }): JSX.Element => {
    return (
        <div className={styles.item}>
            <Link href={`/${pk}`}>
                <a>
                    <img src={image.split('8000')[1]} alt="" width="245" height="381" />
                    {/* <Image src="/item.png" alt="Ve"  /> */}
                    <p>{title}</p>
                    <p>{year_prod}, {category}, США</p>
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
                                <p>{raiting_kino}</p>

                            </div>
                        </div>
                        <div className={styles.badge}>
                            <div className={styles.startBadge}>
                                <Image src="/badgeIMDb.png" alt="Ve" width="34" height="34" />

                            </div>
                            <div className={styles.endBadge}>
                                <p>{raiting_imdb}</p>

                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div >
    );
};
export default Item;