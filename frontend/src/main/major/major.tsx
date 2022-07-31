import { FC } from "react";
import Banner from "./banner";
import Breadcamps from "./breadcomps";
import Compilation from "./compilation";
import styles from "./mojor.module.scss";

const items = ['1','2','3']

const Major: FC = (): JSX.Element => {
  return (
    <div className={styles.major}>
      <Breadcamps />
      <Banner />
      <Compilation title="Лучшие фильмы подборки" items={items}/>
      {/* <Compilation title="Новые фильмы подборки" items={items}/> */}
    </div>
  );
};
export default Major;
