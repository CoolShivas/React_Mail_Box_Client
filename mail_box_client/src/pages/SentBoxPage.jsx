import styles from "./SentBoxPage.module.css";
import React, { useEffect, useState } from 'react'

const SentBoxPage = () => {

    const cleanEmail = localStorage.getItem("cleanEmail");
    console.log(cleanEmail);
    // Getting the cleanEmail i.e, stored in localStorage ;

    const [sentMails, setSentMails] = useState([]);
    // Going to store the get mails from sendBox server by api get call to this sentMails Array;

    useEffect(() => {

        const fetchSentEmailFromServer = async () => {

            try {

                const response = await fetch(
                    `https://mailboxclient-88eb9-default-rtdb.firebaseio.com/electronicMaiL/${cleanEmail}/sendBox.json`
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch sendBox email from server");
                }

                const data = await response.json();
                console.log(data); // Getting the data from sendBox;

                const loadedSendEmail = [];

                for (const key in data) {
                    loadedSendEmail.push({
                        id: key,
                        ...data[key]
                    });
                };

                console.log(loadedSendEmail);
                setSentMails(loadedSendEmail);


            } catch (error) {
                console.log("Something went wrong sendBox emails", error);
            }

        };
        fetchSentEmailFromServer();

    }, [cleanEmail]);


    return (
        <>
            <div className={styles.sentbox_container}>
                <div className={styles.sentbox_heading}>
                    <h1> Sent Mails </h1>
                </div>

                <div className={styles.sentbox_content}>
                    {sentMails.map((brr) => {
                        return <li key={brr.id}>
                            <p> To: {brr.sendEmail} </p>
                            <p> Text Mail: {brr.subjectMatter} </p>
                            <p> Content: {brr.contentBox} </p>
                        </li>
                    })}
                </div>
            </div>
        </>
    )
}

export default SentBoxPage;