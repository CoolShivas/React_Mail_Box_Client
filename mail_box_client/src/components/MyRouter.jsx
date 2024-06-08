import Header from "./Header";
import WelComePage from "../pages/WelComePage";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const MyRouter = () => {
    return (
        <>
            <Route path="/"> <Header></Header> </Route>
            <Route path="/signup"> <SignUp></SignUp> </Route>
            <Route path="/signin"> <SignIn></SignIn> </Route>
            <Route path="/welcome"> <WelComePage></WelComePage> </Route>
        </>
    )
}

export default MyRouter;