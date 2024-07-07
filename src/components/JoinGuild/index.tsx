import { useRef } from "react";
import Container from "../Container";
import { Arrow, ArrowLine, CirCle1, CirCle2 } from "../Icon/JoinGuild";
import styles from "./JoinGuild.module.css";
import useIntersectionObsever from "./hooks/useIntersectionObsever";

export default function JoinGuild() {
    const ref = useRef<HTMLDivElement>(null);
    const isInViewport = useIntersectionObsever(ref);

    return (
        <div className={styles.joinGuild} ref={ref}>
            <Container>
                <CirCle1 className={`${styles.circle} ${isInViewport ? styles.fadeIn : ''}`} />
                <CirCle2 className={`${styles.circle} ${isInViewport ? styles.fadeIn : ''}`} />
                <ArrowLine className={`${styles.arrowLine} ${isInViewport ? styles.fadeIn : ''}`} />
                <Arrow className={`${styles.arrow} ${isInViewport ? styles.fadeIn : ''}`} />
                <div className={styles.sendEmail}>
                    <h1>길드 신청서를 이메일로 보낼까요?</h1>
                    <div>
                        <form action="">
                            <input
                                type="email"
                                placeholder="이메일을 입력해주세요."
                            />
                            <button type="submit">
                                <span>전송</span>
                            </button>
                        </form>
                        <hr />
                        <div>
                            <span>
                                이메일을 등록하면 추후 면접을 위한 이력 작성
                                메일이 전송됩니다.
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
