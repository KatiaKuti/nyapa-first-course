import MainContainer from "../components/MainContainer";
import styles from "../styles/404.module.css"

export default function Error() {
    return (
        <MainContainer>
            <div className={styles.main}>
                <h1 className={styles.caption404}>
                    Ой, мы не нашли страницу &#128517;
                </h1>
                <p className={styles.text404}>
                    404
                </p>
            </div>
            <style jsx>
                {`
                    h1 {
                        font-size: 120px;
                    }
                    p {
                        font-size: 200px;
                    }
                    body {
                        background: red;
                    }
                `}
            </style>
        </MainContainer>
    )
}