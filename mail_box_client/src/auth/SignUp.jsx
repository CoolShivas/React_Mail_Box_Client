import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className={styles.signup_div}>
            <div className={styles.heading}>
                <h1> Sign Up </h1>
            </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">
                    Email
                </label>

                <div className="col-sm-10">
                    <input type="email" className="form-control" />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
                    {" "}
                    Confirm Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" />
                </div>
            </div>

            <div className={styles.actions_signup__btn}>
                <button> Submit </button>
            </div>
        </div>
    );
};

export default SignUp;
