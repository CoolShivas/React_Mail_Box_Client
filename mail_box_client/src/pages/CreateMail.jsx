import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import JoditEditor from "jodit-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./CreateMail.module.css";
import { useRef, useState } from "react";



const CreateMail = () => {

    // const editor = useRef(null);

    // const [content, setContent] = useState('');

    const navigate = useHistory();

    const handlerOnCancelBtn = () => {
        navigate.push("/welcome");
    };


    // const [post, setPost] = useState({
    //     receiver: '',
    //     subject: '',
    // });

    // const fieldChangeHandler = (e) => {
    //     setPost({
    //         ...post, [e.target.id]: e.target.value
    //     })
    // };

    // const contentFieldHandler = (data) => {
    //     setPost({
    //         ...post,
    //         "content": data
    //     })
    // };

    // const handlerOnMailFormSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(post);

    // try {
    //     if (post.receiver.trim() === "") {
    //         alert("Email is required");
    //         return;
    //     }

    //     if (post.subject.trim() === "") {
    //         alert("Text Mail is required");
    //         return;
    //     }

    //     if (post.content.trim() === "") {
    //         alert("Content message is required");
    //         return;
    //     }

    //     const cleanEmail = localStorage.getItem("cleanEmail");
    //     const newCleanEmail = post.receiver.replace(/[@.]/g, "")
    //     console.log(newCleanEmail);

    //     const res = await fetch(`https://mailboxclient-88eb9-default-rtdb.firebaseio.com/shivemail/${cleanEmail}/${newCleanEmail}.json`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(post),
    //     })
    //     console.log('Sent Successfully', res);

    // } catch (error) {
    //     console.log(error);
    //     alert("Something went wrong to send the mail");
    // }
    // };


    // Once again started using the rich editor with the help of ReactQuill whereas above one was completed with the help of JoditEditor ;


    const [sendEmail, setSendEmail] = useState("");
    const [subjectMatter, setSubjectMatter] = useState("");
    const [contentBox, setContentBox] = useState("");


    const handlerOnSendEmail = (e) => {
        setSendEmail(e.target.value);
    };

    const handlerOnSubjectMatter = (e) => {
        setSubjectMatter(e.target.value);
    };

    const handlerOnMailFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const sendEmailDetails = {
                sendEmail: sendEmail,
                subjectMatter: subjectMatter,
                contentBox: contentBox,
            };

            console.log(sendEmailDetails);

            const senderEmail = localStorage.getItem("cleanEmail");
            console.log(senderEmail);
            const reciverCleanEmail = JSON.stringify(sendEmail.replace(/[@.]/g, ""));
            console.log(reciverCleanEmail);

            const response = await fetch(`https://mailboxclient-88eb9-default-rtdb.firebaseio.com/shivaEmail/${senderEmail}/${reciverCleanEmail}.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(sendEmailDetails),
            })

            console.log("Email send successfully", response);


        } catch (error) {
            console.log("Something went wrong to send the mail", error);
            alert("Something went wrong to send the mail");
        }



    };


    return (
        <form onSubmit={handlerOnMailFormSubmit}>
            <div className={styles.create_mail__container}>
                <div className="create_mail__div">
                    {/* {JSON.stringify(post)} */}
                    <div className={styles.header_right}>
                        <button onClick={handlerOnCancelBtn}> X </button>
                    </div>

                    <div className={styles.create_mail__header}>

                        <div className={styles.header_left}>
                            <div className={styles.emailto}>

                                <input type="email"
                                    placeholder="To :"
                                    id="receiver"
                                    // onChange={fieldChangeHandler}
                                    value={sendEmail}
                                    onChange={handlerOnSendEmail}
                                />

                            </div>

                            <div className={styles.emailto}>
                                <input
                                    type="text"
                                    placeholder="Text Mail"
                                    id="subject"
                                    // onChange={fieldChangeHandler}
                                    value={subjectMatter}
                                    onChange={handlerOnSubjectMatter}
                                />
                            </div>

                            <div className={styles.emailto}>
                                {/* <textarea name="text" id="text" rows={10} cols={20} placeholder="This is a text box"></textarea> */}

                                {/* <JoditEditor
                                    ref={editor}
                                    value={post.content}
                                    // onChange={newContent => setContent(newContent)}
                                    onChange={newContent => contentFieldHandler(newContent)}
                                ></JoditEditor> */}

                                <ReactQuill value={contentBox} onChange={setContentBox} id="editor" />

                            </div>
                        </div>
                        <div className={styles.mail_send__btn}>
                            <button className="btn btn-info" type="submit"> Send </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateMail;