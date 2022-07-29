import { FC } from "react";
import styles from './main.module.scss';
import Image from 'next/image'
import ToolbarMain from "./toolbar";

const Main: FC = ({ }): JSX.Element => {
    return (
        <div className={styles.main}>
            <div className={styles.major}>
                MAIN
            </div>
            <ToolbarMain />
        </div>
    )
}
export default Main;
