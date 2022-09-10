import Image from "next/image"
import styles from "../../../styles/Contacts.module.css"

export default function Contacts() {
    const imageSize = 60

    return (
        <div className={styles.contactsContainer}>
            <div className={styles.contactText}>
                <h2>Contatos</h2>
                <p>Olá, aqui estão meus contatoscaso queira se comunicar comigo! Muito prazer em ver-te aqui!🙃</p>
            </div>
            <div className={styles.contactLinks}>

                <div className={styles.contactsGroup}>
                    <Image className={styles.imageContacts} src='/linkedin.svg' width={imageSize} height={imageSize} alt='linkedin' />
                    <h4 className={styles.textSocialMedias}>LinkedIn</h4>
                </div>

                <div className={styles.contactsGroup}>
                    <Image className={styles.imageContacts} src='/github.svg' width={imageSize + 10} height={imageSize + 10} alt='linkedin' />
                    <h4 className={styles.textSocialMedias}>GitHub</h4>
                </div>

                <div className={styles.contactsGroup}>
                    <Image className={styles.imageContacts} src='/mail.svg' width={imageSize} height={imageSize} alt='linkedin' />
                    <h4 className={styles.textSocialMedias}>E-mail</h4>
                </div>
                
                <div className={styles.contactsGroup}>
                    <Image className={styles.imageContacts} src='/whatsapp.svg' width={imageSize} height={imageSize} alt='linkedin' />
                    <h4 className={styles.textSocialMedias}>WhatsApp</h4>
                </div>
            </div>
        </div>
    )
}