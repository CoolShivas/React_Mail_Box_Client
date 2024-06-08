import SignUp from "../auth/SignUp";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const MyRouter = () => {
    return (
        <>
            <Route path="/signup"> <SignUp></SignUp> </Route>
        </>
    )
}

export default MyRouter;