import { FC, useState, useEffect } from "react";
import styles from './main.module.scss';
// import Image from 'next/image'
import ToolbarMain from "../components/toolbar";
import Major from "./major";
import axios from "axios";

import Image from 'next/image';


const Main: FC = ({ }): JSX.Element => {
    const [state, setState] = useState<any>();

    // const a = axios.get('http://localhost:8000/api1/video/').then((res) => {
    //     console.log(res.data)
    // })

    useEffect(() => {
        const a = axios.get('/api1/video/').then((res) => {
            setState(res.data)
        })
    }, [])

    return (
        <>
            <p>
                {state && state.map((item: any, id: any) => {
                    return (
                        <p key={id}>{item.title}</p>
                    )
                })}
            </p>
            <p>
                <img src="/media/video/2022/07/30/Rectangle_8-2.png" alt="" />
                ==
                {/* <Image src="/media/video/2022/07/30/Rectangle_8-2.png" width={50} height={50} /> */}
                <Image loader="http://vl.com/media/video/2022/07/30/Rectangle_8-2.png" width={50} height={50} />
            </p>
            <div className={styles.main}>

                <Major />
                <ToolbarMain />

            </div>
        </>
    )
}
export default Main;
