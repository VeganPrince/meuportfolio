import Image from "next/image";
import styles from "../../styles/About.module.css"

export default function About() {

    return (
        <div className={styles.aboutContainer}>
            <Image src='/minhaFoto.jpg' alt="foto de alexandre" width={500} height={500} className={styles.image} />

            <div className={styles.textAboutContent}>
                <h2>Sobre mim</h2>
                <p>Olá, me chamo Alexandre, atualmente tenho {2022 - 2003} anos. Sou desenvolvedor front-end e técnico em informática (desenvolvimento de sistemas).</p>
            </div>
        </div>
    )
}