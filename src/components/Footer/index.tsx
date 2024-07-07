import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Logo } from "../Icon";
import Container from "../Container";
import JoinGuild from "../JoinGuild";

export default function Footer() {
    return (
        <footer>
            <JoinGuild />
            <Container>
                <div className={styles.inner}>
                    <div className={styles.home}>
                        <Link to="/">
                            <Logo color="black" />
                            <span className={styles.irr}>IRR,</span>
                            <span className={styles.deepwoken}>Deepwoken</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
