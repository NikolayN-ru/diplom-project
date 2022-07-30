import Image from 'next/image';

const localState = ["Главная", "Подборки", "По жанру", "Фильмы", "Сериалы", "Мультфильмы", "Аниме", "Актеры"]

const Logo = () => {
    return (

        // <div className={styles.logo}>
        <div>
            <a href="/">
                <Image src="/logo.png" alt="Ve" width="157" height="94" />
            </a>
        </div>

    )
}
export default Logo;
