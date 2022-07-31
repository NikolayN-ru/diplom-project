import { FC, useState, useEffect } from "react";
import styles from './main.module.scss';
import ToolbarMain from "../components/toolbar";
import Major from "./major";
import axios from "axios";
import { loadCatalogFilms } from '../../redux/actions';
import { useDispatch, useStore } from "react-redux";

import Image from 'next/image';


const Main: FC = ({ }): JSX.Element => {

    const [state, setState] = useState<any>();
    const [category, setCategory] = useState<any>()

    const store = useStore();
    const index: any = store.getState()

    const dispatch = useDispatch();

    dispatch(loadCatalogFilms());

    useEffect(() => {
        setState(index.catalogFilms)
    }, [index,])

    // useEffect(() => {
    //     // axios.get('/api1/category/').then(({data}) => setCategory(data));
    //     axios.get('/api1/category/').then((res) => {
    //         setCategory(res.data);
    //     })
    // }, []);

    useEffect(() => {
        axios.get('/api1/video/').then((res) => {
            setState(res.data);
        })
    }, [])

    return (
        <div>
            <div>
                {/* {index.catalogFilms && index.catalogFilms.map((item, id) => {
                    return (
                        <div key={id}>{item.title}
                            <img src={item.image.split('8000')[1]} alt="" />
                        </div>
                    )
                })} */}

                {/* {state && state.map((item: any, id: any) => {
                    return (
                        <div key={id}>
                            <p >{item.title}</p>
                            <img src={item.image.split('8000')[1]} alt="" />
                        </div>
                    )
                })} */}
            </div>

            <div className={styles.main}>

                <Major />
                <ToolbarMain />

            </div>
        </div>
    )
}
export default Main;
