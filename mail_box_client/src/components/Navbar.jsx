import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((store) => store.authen.isAuthenticated);

    const navigate = useHistory();

    const handlerOnLogout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem("Save Token");
        navigate.replace("/signup");
    };

    return (
        <nav className={styles.navbar}>
            <ul>

                {isAuthenticated && <>
                    <li>
                        <NavLink to="/welcome" className={styles.navlink}>
                            home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/signup" className={styles.navlink}>
                            <button onClick={handlerOnLogout}> Logout </button>
                        </NavLink>
                    </li>
                </>}

                {!isAuthenticated && <li>
                    <NavLink to="/signin" className={styles.navlink}>
                        login
                    </NavLink>
                </li>}



            </ul>
        </nav>
    );
};

export default Navbar;
