import { authActions } from "../store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Header.module.css";
import Navbar from "./Navbar";



const Header = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((store) => store.authen.isAuthenticated);
    console.log(isAuthenticated);


    let localToken = localStorage.getItem("Save Token");

    useEffect(() => {

        if (localToken) {
            dispatch(authActions.login(localToken));
        }

    }, [localToken]);

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