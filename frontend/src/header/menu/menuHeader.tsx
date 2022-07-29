import { FC } from "react";
import manuHeaderInterface from "./menuHeader.interface";
import styles from "./menuHeader.module.scss";


const MenuHeader: FC = (): JSX.Element => {
  return (
    <ul className={styles.menuItems}>
      {/* {localState.map((item, id) => <menuHeaderItem/>)} */}
      <li>Главная</li>
      <li>Подборки</li>
      <li>По жанру</li>
      <li>Фильмы</li>
      <li>Сериалы</li>
      <li>Мультфильмы</li>
      <li>Аниме</li>
      <li>Актеры</li>
    </ul>
  );
};
export default MenuHeader;
