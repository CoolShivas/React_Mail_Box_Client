import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const MyRouter = () => {
    return (
        <>
            <Route path="/signup"> <SignUp></SignUp> </Route>
            <Route path="/signin"> <SignIn></SignIn> </Route>
        </>
    )
}

export default MyRouter;