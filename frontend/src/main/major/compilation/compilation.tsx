import { FC } from "react";
import { useStore } from "react-redux";
import CompilationInterface from "./compilation.interface";
import styles from "./compilation.module.scss";
import Item from "./item";

const item = {
    raiting: 48,
    imdi: 24,
    title: "Legendary",
    image: "URL-image",
    year: "2020",
    description: "la-la-la"
}

const Compilation: FC<CompilationInterface> = ({ title, items }): JSX.Element => {

    const { catalogFilms } = useStore().getState()

    console.log(catalogFilms, 'store')

    return (
        <div className={styles.compilation} >
            <h2>
                {title}
            </h2>
            <div className={styles.items}>
                {catalogFilms && catalogFilms.map((item, id) => {
                    return (
                        <Item item={item} />
                    )
                })}
            </div>
        </div>
    );
};
export default Compilation;