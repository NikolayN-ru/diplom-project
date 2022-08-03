import axios from "axios";
import { GetStaticProps, NextPage } from "next";

const Blog: NextPage = ({ menu, firstCategory }: any): JSX.Element => {
    console.log(menu, 'menu')
    return (
        <div>
            blog
            {firstCategory}
        </div>
    )
}
export default Blog;

export const getStaticProps: GetStaticProps = async () => {

    // const firstCategory = 2;
    // const { data: menu } = await axios.get('/api1/video/2', {});

    const b = await axios.get(`/api1/video/2`).then((res) => {
        console.log(res.data)
    })
    console.log(b)


    return {
        props: {
            // menu,
            // firstCategory
        }
    }
}