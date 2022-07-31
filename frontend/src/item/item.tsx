import axios from "axios";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import ToolbarMain from "../components/toolbar";
import styles from "./item.module.scss";
import ItemDescription from "./itemDescription";


const ItemFilm: FC = (): JSX.Element => {

    const [state, setState] = useState<any>();

    const router = useRouter();
    const { item } = router.query;
    const item2 = Number(item);

    useEffect(() => {
        axios.get(`/api1/video/${item2}`).then((res) => {
            setState(res.data);
        })
    }, [item2])


    console.log(state)

    return (
        <div className={styles.item}>
            <ItemDescription itemState={state}/>
            <ToolbarMain />
        </div>
    );
};
export default ItemFilm;
