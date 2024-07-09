import styles from './Container.module.css'

export default function Container({ children, className }: any) {
    return <div className={`${styles.container} ${className ? className : ""}`}>
        {children}
    </div>
}