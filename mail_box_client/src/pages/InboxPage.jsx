import styles from "./InboxPage.module.css";

const InboxPage = () => {

    return (<>

        <div className={styles.inbox_container}>
            <div className={styles.inbox_div}>
                <div className={styles.inbox_heading}>
                    <h1> Welcome to the inbox </h1>
                </div>
                <div className={styles.inbox_messages}>
                    <ul>
                        <li>
                            <h2>Hello World
                            </h2>
                            <p> Where are you bro ?</p>
                        </li>

                        <li>
                            <h2>Hello World
                            </h2>
                            <p> Where are you bro ?</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>);
}
export default InboxPage;