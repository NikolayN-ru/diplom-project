import { FC } from "react";
import styles from './toolbar.module.scss';
import Image from 'next/image'
import ToolbarItem from "./toolbarItem";

const ToolbarMain: FC = (): JSX.Element => {
    return (
        <div className={styles.toolbar}>
            <ul>
                <p>
                    Похожие коллекции
                </p>
                <ToolbarItem />
                <ToolbarItem />
                <ToolbarItem />
                <ToolbarItem />
            </ul>
            <div className={styles.collection}>
                <p>популярные коллекции</p>
                <Image src="/popular.png" alt="Ve" width="425" height="545" />
                <div className={styles.description}>
                    <p>Лучшие сериалы 2015-2021 годов</p>
                    <button>Смотреть</button>
                </div>
                <div className={styles.sircles}>
                    <div className={styles.sircle}></div>
                    <div className={styles.sircle}></div>
                    <div className={styles.sircle}></div>
                    <div className={styles.sircle}></div>
                </div>
            </div>
        </div>
    )
}
export default ToolbarMain;
