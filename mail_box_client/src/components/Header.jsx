import styles from "./Header.module.css";
import Navbar from "./Navbar";



const Header = () => {

    return (
        <>
            <div className={styles.header_div}>
                <div className={styles.header_container}>
                    <div className={styles.header_log}>
                        <h1> Smail </h1>
                    </div>
                    <div>
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;