import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./CreateMail.module.css";



const CreateMail = () => {

    const navigate = useHistory();

    const handlerOnCancelBtn = () => {
        navigate.push("/welcome");
    };

    return (
        <>
            <div className={styles.create_mail__container}>
                <div className="create_mail__div">

                    <div className={styles.header_right}>
                        <button onClick={handlerOnCancelBtn}> X </button>
                    </div>

                    <div className={styles.create_mail__header}>

                        <div className={styles.header_left}>
                            <div className={styles.emailto}>

                                <input type="email" placeholder="To :" />

                            </div>

                            <div className={styles.emailto}>
                                <input type="text" placeholder="Text Mail" />
                            </div>

                            <div className={styles.emailto}>
                                <textarea name="text" id="text" rows={10} cols={20} placeholder="This is a text box"></textarea>
                            </div>
                        </div>
                        <div className={styles.mail_send__btn}>
                            <button className="btn btn-info"> Send </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateMail;