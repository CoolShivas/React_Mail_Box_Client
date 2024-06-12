import styles from "./SentBoxPage.module.css";
import React from 'react'

const SentBoxPage = () => {
    return (
        <>
            <div className={styles.sentbox_container}>
                <div className={styles.sentbox_heading}>
                    <h1> Sent Mails </h1>
                </div>

                <div className={styles.sentbox_content}>
                    <ul>
                        <li>
                            <h2> Sent Contents </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SentBoxPage;