import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import styles from "./Notification.module.css";
import Menu from "../components/Menu";

export default function Notification() {
    return (
        <div>
            <Header />
            <Wrapper>
                <Menu selected={"notification"} />
                <div className={styles.menu2}>
                    <h3>ㅎㅇ</h3>
                </div>
                <Container></Container>
            </Wrapper>
            <Footer />
        </div>
    );
}
