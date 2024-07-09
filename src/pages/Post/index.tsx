import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import styles from "./Post.module.css";
import Menu from "./components/Menu";
import Card from "./components/Card";

export default function Post() {
    return (
        <div>
            <Header />
            <Wrapper>
                <Menu selected={"post"} />
                <Container className={styles.container}>
                    <Card
                        tag={"Notification"}
                        title={"반가워요 반가워요"}
                        description={"이것은 테스트 메시지입니다!"}
                    />
                    <Card
                        tag={"Notification"}
                        title={"반가워요 반가워요"}
                        description={"이것은 테스트 메시지입니다!"}
                    />
                    <Card
                        tag={"Notification"}
                        title={"반가워요 반가워요"}
                        description={"이것은 테스트 메시지입니다!"}
                    />
                    <Card
                        tag={"Notification"}
                        title={"반가워요 반가워요"}
                        description={"이것은 테스트 메시지입니다!"}
                    />
                    <Card
                        tag={"Notification"}
                        title={"반가워요 반가워요"}
                        description={"이것은 테스트 메시지입니다!"}
                    />
                </Container>
            </Wrapper>
            <Footer />
        </div>
    );
}
