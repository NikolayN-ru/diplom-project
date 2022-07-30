import { FC } from "react";
import styles from "./category.module.scss";


const Category: FC = (): JSX.Element => {
    return (
        <div className={styles.category}>
            <div className={styles.item1}>1</div>
            <div className={styles.item2}>3</div>
            <div className={styles.item2}>4</div>
            <div className={styles.item3}>6</div>
            <div className={styles.item3}>7</div>
            <div className={styles.item3}>8</div>
            <div className={styles.item3}>9</div>
            <div className={styles.item3}>10</div>
            <div className={styles.item3}>11</div>
            <div className={styles.item3}>12</div>
            <div className={styles.item3}>13</div>
            <div className={styles.item3}>14</div>
        </div>
    );
};
export default Category;
