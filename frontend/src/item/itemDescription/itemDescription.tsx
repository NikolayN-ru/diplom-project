import { FC, useEffect, useState } from "react";
import styles from "./itemDescription.module.scss";
import Image from 'next/image'
import itemDescriptionInterface from "./itemDescription.interface";
import Head from "next/head";


const itemDescription: FC<itemDescriptionInterface> = ({ itemState }): JSX.Element => {
    return (
        <div className={styles.itemDescription}>
            <Head>
                <title>{itemState && itemState.title}</title>
            </Head>
            <div className={styles.itemDescriptionLeft}>
                <img src={itemState && itemState.image} alt="" height="666" />
                <div className={styles.raiting}>
                    <div className={styles.raitingOne}>
                        <p>8.9</p>
                        <p>Кинопоиск</p>
                    </div>
                    <div className={styles.raitingTwoo}>
                        <p>8</p>
                        <p>IMDb</p>
                    </div>
                </div>
                <div className={styles.tizer}>
                    <Image src="/tizer.png" alt="" width="428" height="216" />
                    <div className={styles.play}>
                        <Image src="/play.svg" alt="" width="54" height="41" />
                        <p>Смотреть трейлер</p>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <h1>{itemState && itemState.title} ({itemState && itemState.year_prod})</h1>
                <p className={styles.slogan}>Way Down</p>
                <ul className={styles.descriptionMain}>
                    <li>
                        <p>Продолжительность</p>
                        <p>1 Час 58 минут</p>
                    </li>
                    <li>
                        <p>
                            Год выпуска
                        </p>
                        <p>
                            {itemState && itemState.year_prod}
                        </p>
                    </li>
                    <li>
                        <p>Премьера фильма в России</p>
                        <p>
                            22 Апреля 2021
                        </p>
                    </li>
                    <li>
                        <p>
                            Возраст
                        </p>
                        <p>16 +</p>
                    </li>
                </ul>
                <ul className={styles.descriptionMiddle}>
                    <li>
                        <span>Жанр</span><span>{itemState && itemState.category}</span>
                    </li>
                    <li>
                        <span>Страна</span><span>США</span>
                    </li>
                    <li>
                        <span>В главных ролях</span><span>Адам Уэст, Берт Уорд, Уильям Шетнер</span>
                    </li>
                    <li>
                        <span>Участвует в подборках</span><span>2021 Нетфликс Вестерны Лучшие фильмы 2021</span>
                    </li>
                </ul>
                <div className={styles.descriptionEnd}>
                    <h2>О чем фильм “{itemState && itemState.title} ({itemState && itemState.year_prod})”</h2>
                    <br />
                    <p>{itemState && itemState.description}</p>
                    <a href="#">ещё</a>
                </div>
            </div>
        </div>
    );
};
export default itemDescription;