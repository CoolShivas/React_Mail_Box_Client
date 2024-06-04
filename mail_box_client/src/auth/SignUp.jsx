import styles from "./SignUp.module.css";

const SignUp = () => {

    const handlerOnSubmitForm = (e) => {
        e.preventDefault();

        const signUpData = {
            Email: e.target.email.value,
            Password: e.target.pass.value,
            ConfirmPassword: e.target.confirmpass.value,
        };

        console.log(signUpData);
    };

    return (
        <form className={styles.signup_div} onSubmit={handlerOnSubmitForm}>
            <div className={styles.heading}>
                <h1> Sign Up </h1>
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

            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
                    Confirm Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="confirmpass" minLength={6} required />
                </div>
            </div>

            <div className={styles.actions_signup__btn}>
                <button type="submit"> Submit </button>
            </div>
        </form>
    );
};

export default SignUp;
