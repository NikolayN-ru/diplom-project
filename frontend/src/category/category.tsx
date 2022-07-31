import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { loadCategoryFilm } from "../../redux/actions";
import styles from "./category.module.scss";


const Category: FC = (): JSX.Element => {

    const [state, setState] = useState([{ pk: 1, name: 'loading' }]);

    const store = useStore();
    const index: any = store.getState()

    const dispatch = useDispatch();

    dispatch(loadCategoryFilm());

    useEffect(() => {
        setState(index.categoryFilms)
    }, [index, ])
    
    useEffect(() => {
        // axios.get('/api1/category/').then(({data}) => setCategory(data));
        axios.get('/api1/category/').then((res) => {
            setState(res.data);
        })
    }, []);

    return (
        <>
            {index.categoryFilms && index.categoryFilms.map((item: any) => <div key={item.pk}>{item.name}</div>)}

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
        </>
    );
};
export default Category;
