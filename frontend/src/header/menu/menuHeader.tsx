import { FC } from "react";
import manuHeaderInterface from "./menuHeader.interface";
import styles from "./menuHeader.module.scss";
import Link from 'next/link';


const MenuHeader: FC = (): JSX.Element => {
  return (
    <ul className={styles.menuItems}>
      <li><Link href="/"><a>Главная</a></Link></li>
      <li><Link href='/category'><a>По жанру</a></Link></li>
    </ul>
  );
};
export default MenuHeader;