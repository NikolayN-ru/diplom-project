import { FC, useState, useEffect } from "react";
import styles from './main.module.scss';
import ToolbarMain from "../components/toolbar";
import Major from "./major";
import axios from "axios";

import Image from 'next/image';


const Main: FC = ({ }): JSX.Element => {
    const [state, setState] = useState<any>();
    const [category, setCategory] = useState<any>()

    useEffect(() => {
        // axios.get('/api1/category/').then(({data}) => setCategory(data));
        axios.get('/api1/category/').then((res) => {
            setCategory(res.data);
        })
    }, []);

    console.log(category)
    
    // const a = axios.get('http://localhost:8000/api1/video/').then((res) => {
    //     console.log(res.data)
    // })


    useEffect(() => {
        axios.get('/api1/video/').then((res) => {
            setState(res.data);
        })
    }, [])
    


    return (
        <div>

            <div>
                {state && state.map((item: any, id: any) => {
                    return (
                        <div key={id}>
                            <p >{item.title}</p>
                            <img src={item.image.split('8000')[1]} alt="" />
                        </div>
                    )
                })}
            </div>

            <div className={styles.main}>

                <Major />
                <ToolbarMain />

            </div>
        </div>
    )
}
export default Main;
