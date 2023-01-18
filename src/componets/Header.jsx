import styles from "../style.module.css"
export default function Header(){

    return (
        <div>
            <header className={styles.headerBar}>
                <div className={styles.headingName}>Todo List</div>
            </header>
        </div>
    )
}