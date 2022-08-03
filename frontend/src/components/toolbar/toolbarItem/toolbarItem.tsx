import { FC } from "react";
import styles from './toolbarItem.module.scss';
import Image from 'next/image'

const ToolbarItem: FC = (): JSX.Element => {
    return (
        <li className={styles.liToolbar}>
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
    )
};

export default ToolbarItem;