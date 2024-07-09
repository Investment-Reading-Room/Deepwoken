import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu({ selected }: any) {
    const menuStyle = {
        transform: `translate3d(${
            selected === "post"
                ? "-9.96%"
                : selected === "notification"
                ? "-37.33%"
                : selected === "member"
                ? "-64.92%"
                : selected === "war"
                ? "-82.4%"
                : selected === "tip"
                ? "-93.67%"
                : "0"
        }, -50%, 0)`,
    };

    return (
        <div className={styles.menu}>
            <div style={menuStyle}>
                <div className={selected === "post" ? styles.selected : ""}>
                    <Link to="/post">
                        <h3>All Post</h3>
                    </Link>
                </div>
                <div
                    className={
                        selected === "notification" ? styles.selected : ""
                    }
                >
                    <Link to="/post/notification">
                        <h3>Notification</h3>
                    </Link>
                </div>
                <div className={selected === "member" ? styles.selected : ""}>
                    <Link to="/post/member">
                        <h3>Member</h3>
                    </Link>
                </div>
                <div className={selected === "war" ? styles.selected : ""}>
                    <Link to="/post/war">
                        <h3>War</h3>
                    </Link>
                </div>
                <div className={selected === "tip" ? styles.selected : ""}>
                    <Link to="/post/tip">
                        <h3>Tip</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}
