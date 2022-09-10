import styles from '../../../styles/Head.module.css'

export default function MyHeader() {

    return (
        <div className={styles.head}>
            <h2 className={styles.logo}>
                <span className={styles.chave}>&#123;</span >
                AD
                <span className={styles.chave}>&#125;</span>
            </h2>

            <div className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Sobre mim</li>
                    <li className={styles.listItem}>Projetos</li>
                    <li className={styles.listItem}>Contatos</li>
                    <li className={styles.listItem}>Cursos</li>
                    <li className={styles.listItem}>Minhas skills</li>
                </ul>
            </div>
        </div>
    )
}