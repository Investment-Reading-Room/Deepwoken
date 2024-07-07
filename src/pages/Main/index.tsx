import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinGuild from "@/components/JoinGuild";
import Wrapper from "@/components/Wrapper";

export default function Main() {
    return (
        <div>
            <Header />
            <Wrapper>
                <Container>dd</Container>
                {/* <JoinGuild /> */}
            </Wrapper>
            <Footer />
        </div>
    );
}
