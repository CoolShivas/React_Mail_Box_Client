import CreateMail from "../pages/CreateMail";
import Header from "./Header";
import WelComePage from "../pages/WelComePage";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const MyRouter = () => {

    const isAuthenticated = useSelector((store) => store.authen.isAuthenticated);

    return (
        <>

            <Route path="/"> <Header></Header> </Route>
            {isAuthenticated && <>

                <Route path="/welcome"> <WelComePage></WelComePage> </Route>
                <Route path="/mail"> <CreateMail></CreateMail> </Route>

            </>}

            {!isAuthenticated && <>
                <Route path="/signup"> <SignUp></SignUp> </Route>
                <Route path="/signin"> <SignIn></SignIn> </Route>
            </>}

        </>
    )
}

export default MyRouter;