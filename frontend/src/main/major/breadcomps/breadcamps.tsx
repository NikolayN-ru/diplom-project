import { FC } from "react";
import styles from "./breadcamps.module.scss";

const Breadcamps: FC = (): JSX.Element => {
    return (
      <div className={styles.breadcamps}>
        <p>Главная / Подборки / Лучшие фильмы всех времен</p>
      </div>
    );
  };
  export default Breadcamps;