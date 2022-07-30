import { FC } from "react";
import styles from "./banner.module.scss";
import Image from 'next/image'

const Banner: FC = (): JSX.Element => {
    return (
        <div className={styles.banner}>
            <Image src="/banner.png" alt="Ve" width="900" height="448" />
            <div className={styles.description}>
                <p>
                    Лучшие фильмы всех времен
                </p>
            </div>
        </div>
    );
};
export default Banner;