import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import styles from "./SignUp.module.css";

const SignIn = () => {

    const handlerOnSubmitForm = async (e) => {
        try {
            e.preventDefault();

            const signInData = {
                Email: e.target.email.value,
                Password: e.target.pass.value,
            };

            console.log(signInData);




            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQcA5REjOt31zhMdN654yDzlfkUKNT8CA`, {
                email: signInData.Email,
                password: signInData.Password,
                returnSecureToken: true
            })

            console.log('Response:', response.data)
            console.log("SignUp Successfully");
            alert("SignIn Successfully.");


        } catch (error) {
            alert(error, "Something went wrong");
        }


        e.target.email.value = "";
        e.target.pass.value = "";

    };


    return (
        <>
            <form className={styles.signup_div} onSubmit={handlerOnSubmitForm}>
                <div className={styles.heading}>
                    <h1> Sign In </h1>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">
                        Email
                    </label>

                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" required />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="pass" minLength={6} required />
                    </div>
                </div>



                <div className={styles.actions_signup__btn}>
                    <button type="submit"> Sign In </button>
                </div>

                <div className={styles.actions_have_account__btn}>
                    <NavLink to="/signup">
                        <button className={styles.have_account}> Don't have an account? SignUp </button>
                    </NavLink>
                </div>



            </form>
        </>
    );
};

export default SignIn;
