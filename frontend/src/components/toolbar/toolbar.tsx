import { FC } from "react";
import styles from './toolbar.module.scss';
import Image from 'next/image'

const ToolbarMain: FC = ({ }): JSX.Element => {
    return (
        <div className={styles.toolbar}>
            <ul>
                <p>
                    Похожие коллекции
                </p>
                <li>
                    <Image src="/mini1.png" alt="Ve" width="92" height="98" />
                    <div className={styles.description}>
                        <div>
                            <Image src="/clock.svg" alt="clock" width={16} height={16} />
                            <p>
                                2 недели назад
                            </p>
                        </div>
                        <p>
                            Задача организации, в особенности же новая формировании.
                        </p>
                    </div>

                </li>
                <li>
                    <Image src="/mini1.png" alt="Ve" width="92" height="98" />
                    <div className={styles.description}>
                        <div>
                            <Image src="/clock.svg" alt="clock" width={16} height={16} />
                            <p>
                                2 недели назад
                            </p>
                        </div>
                        <p>
                            Задача организации, в особенности же новая формировании.
                        </p>
                    </div>
                </li>
                <li>
                    <Image src="/mini1.png" alt="Ve" width="92" height="98" />
                    <div className={styles.description}>
                        <div>
                            <Image src="/clock.svg" alt="clock" width={16} height={16} />
                            <p>
                                2 недели назад
                            </p>
                        </div>
                        <p>
                            Задача организации, в особенности же новая формировании.
                        </p>
                    </div>
                </li>
                <li>
                    <Image src="/mini1.png" alt="Ve" width="92" height="98" />
                    <div className={styles.description}>
                        <div>
                            <Image src="/clock.svg" alt="clock" width={16} height={16} />
                            <p>
                                2 недели назад
                            </p>
                        </div>
                        <p>
                            Задача организации, в особенности же новая формировании.
                        </p>
                    </div>
                </li>
                <li>
                    <Image src="/mini1.png" alt="Ve" width="92" height="98" />
                    <div className={styles.description}>
                        <div>
                            <Image src="/clock.svg" alt="clock" width={16} height={16} />
                            <p>
                                2 недели назад
                            </p>
                        </div>
                        <p>
                            Задача организации, в особенности же новая формировании.
                        </p>
                    </div>
                </li>
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
