import { useDispatch } from "react-redux";
import WelComePage from "../pages/WelComePage";
import { authActions } from "../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Header = () => {

    const navigate = useHistory();

    const dispatch = useDispatch();

    const handlerOnLogout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem("Save Token");
        navigate.replace("/signup");
    };


    return (
        <>
            <div className="header_div">
                <div className="header_container">
                    <div className="header_log">
                        <WelComePage></WelComePage>
                    </div>
                    <div className="header_logout__btn">
                        <button onClick={handlerOnLogout}> Logout </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;