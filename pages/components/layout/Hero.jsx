
import { Button } from 'antd'
import Image from 'next/image'
import styles from '../../../styles/Hero.module.css'

export default function Hero() {

    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                Olá, meu nome é
                <h1 className={styles.heroTitle}>
                    Alexandre <span className={styles.heroTitleColor}>Dantas</span>🏐
                </h1>
                sou um
                <span className={styles.textColor}> &#60;</span>
                frontEndDeveloper
                <span className={styles.textColor}>&#47;&#62;</span>
                <div className={styles.heroButtons}>
                    <Button className={styles.linkedinButton}>LinkedIn</Button>
                    <Button className={styles.githubButton}>GitHub</Button>
                </div>
            </div>

            <div className={styles.heroImage}>
                <Image src="/bitmoji-site.svg" alt='imagem de alexandre' height={500} width={500} className={styles.imageFromHero} />
            </div>
        </div>
    )
}