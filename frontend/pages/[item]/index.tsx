import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ItemFilm from '../../src/item';
import axios from "axios";

const Item: NextPage = ({ menu, firstCategory }: any): JSX.Element => {
    return (
        <div>
            <Head>

            </Head>
            {/* <ItemFilm menu={menu} firstCategory={firstCategory}/> */}
            <ItemFilm />
        </div>

    )
}
export default Item;

// export const getStaticProps: GetStaticProps = async () => {

//     const firstCategory = 2;
//     const { data: menu } = await axios.get('/api1/video/2');

//     return {
//         props: {
//             menu,
//             firstCategory
//         }
//     }
// }