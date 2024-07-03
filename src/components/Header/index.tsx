import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Logo } from "../Icon";
import Container from "../Container";

export default function Header() {
    return (
        <header>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.home}>
                        <Link to="/">
                            <Logo color="black" />
                            <span className={styles.irr}>IRR,</span>
                            <span className={styles.deepwoken}>Deepwoken</span>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Link to="/post">
                            <span>Post</span>
                            <div></div>
                        </Link>
                        <Link to="/guild">
                            <span>Guild</span>
                            <div></div>
                        </Link>
                        <Link to="/tools">
                            <span>Tools</span>
                            <div></div>
                        </Link>
                        <Link to="/docs">
                            <span>Docs</span>
                            <div></div>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
