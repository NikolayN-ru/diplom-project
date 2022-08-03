import { FC, useState, useEffect } from "react";
import styles from './main.module.scss';
import ToolbarMain from "../components/toolbar";
import Major from "./major";
import axios from "axios";
import { loadCatalogFilms } from '../../redux/actions';
import { useDispatch, useStore } from "react-redux";


const Main: FC = (): JSX.Element => {

    const [state, setState] = useState<any>();

    const store = useStore();
    const index: any = store.getState();

    const dispatch = useDispatch();

    dispatch<any>(loadCatalogFilms());

    useEffect(() => {
        setState(index.catalogFilms)
    }, [index,])

    useEffect(() => {
        axios.get('/api1/video/').then((res) => {
            setState(res.data);
        })
    }, [])

    return (
        <div className={styles.main}>
            <Major />
            <ToolbarMain />
        </div>
    )
}
export default Main;
