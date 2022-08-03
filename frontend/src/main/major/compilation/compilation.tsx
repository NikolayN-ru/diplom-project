import { FC } from "react";
import { useStore } from "react-redux";
import CompilationInterface from "./compilation.interface";
import styles from "./compilation.module.scss";
import Item from "./item";

const Compilation: FC<CompilationInterface> = ({ title }): JSX.Element => {

    const { catalogFilms } = useStore().getState()

    return (
        <div className={styles.compilation} >
            <h2>
                {title}
            </h2>
            <div className={styles.items}>
                {catalogFilms && catalogFilms.map((item: any, id: number) => {
                    return (
                        <Item key={id} item={item} />
                    )
                })}
            </div>
        </div>
    );
};
export default Compilation;