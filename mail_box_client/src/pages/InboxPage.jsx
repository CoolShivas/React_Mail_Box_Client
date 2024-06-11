import { useEffect, useState } from "react";
import styles from "./InboxPage.module.css";

const InboxPage = () => {

    const cleanEmail = localStorage.getItem("cleanEmail");
    console.log(cleanEmail);
    // Getting the cleanEmail i.e, stored in localStorage ;

    const [sentMails, setSentMails] = useState([]);
    // Going to store the get mails from inbox server by api get call to this sentMails Array;

    useEffect(() => {
        const fetchInboxEmailFromServer = async () => {

            try {

                const response = await fetch(
                    `https://mailboxclient-88eb9-default-rtdb.firebaseio.com/electronicMaiL/${cleanEmail}/inbox.json`
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch inbox email from server");
                }

                const data = await response.json();
                console.log(data); // Getting the data;

                const loadServerEmail = [];

                for (const key in data) {
                    loadServerEmail.push({
                        id: key,
                        ...data[key],
                    })
                }
                console.log(loadServerEmail);
                setSentMails(loadServerEmail)

            } catch (error) {
                console.log("Something went wrong inbox emails", error);
            }

        };
        fetchInboxEmailFromServer();
    }, [cleanEmail]);

    return (<>

        <div className={styles.inbox_container}>
            <div className={styles.inbox_div}>
                <div className={styles.inbox_heading}>
                    <h1> Welcome to the inbox </h1>
                </div>
                <div className={styles.inbox_messages}>
                    <ul>
                        {console.log(sentMails)}
                    </ul>
                </div>
            </div>
        </div>

    </>);
}
export default InboxPage;