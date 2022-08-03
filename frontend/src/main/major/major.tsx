import { FC } from "react";
import Banner from "./banner";
import Breadcamps from "./breadcomps";
import Compilation from "./compilation";
import styles from "./mojor.module.scss";

const Major: FC = (): JSX.Element => {
  return (
    <div className={styles.major}>
      <Breadcamps />
      <Banner />
      <Compilation title="Лучшие фильмы подборки" />
    </div>
  );
};
export default Major;
