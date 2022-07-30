import { FC } from "react";
import ToolbarMain from "../components/toolbar";
import styles from "./item.module.scss";
import ItemDescription from "./itemDescription";


const ItemFilm: FC = (): JSX.Element => {
    return (
        <div className={styles.item}>
            <ItemDescription />
            <ToolbarMain />
        </div>
    );
};
export default ItemFilm;
