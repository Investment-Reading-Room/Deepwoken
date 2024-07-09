import styles from "./Card.module.css";

export default function Card({ img, tag, title, description }: any) {
    return (
        <div className={styles.card}>
            <img src={img} alt="" />
            <div>
                <h3>{tag}</h3>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <span>{description}</span>
            </div>
        </div>
    );
}
