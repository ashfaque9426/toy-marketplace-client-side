// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import LoginForm from '../../Components/LoginForm/LoginForm';
import loginBG from '../../assets/background-images/loginBG.jpg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [disableBtn, setDisableBtn] = useState(true);

    const { signIn, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        setError("");

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setEmail("");
                setPassword("");
                setSuccess("login successfull");
                setDisableBtn(true);
                navigate(from, { replace: true });
            })
            .catch(error => {
                if (error) {
                    setError("Your email or password doesnot match");
                }
            })
    }

    const handleEmail = e => {
        const emailInput = e.target.value;
        setEmail(emailInput);

        setEmailError("");

        if (!emailInput.includes("@")) {
            setEmailError("plese include a @ sign in your email");
        } else if (!/\.[a-zA-Z]{2,}/.test(emailInput)) {
            setEmailError("Please include a top level domain name");
        } else {
            setEmailError("");
        }

        if (email.length !== 0 && password.length !== 0) {
            setDisableBtn(false);
        }

        if (emailInput.length === 0) {
            setEmailError("");
            setDisableBtn(true);
        }

    }

    const handlePassowrd = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]+/.test(passwordInput)) {
            setPasswordError("Passwod must contain at least one capital letter");
        } else {
            setPasswordError("");
        }

        if (email.length !== 0 && password.length !== 0) {
            setDisableBtn(false);
        }

        if (passwordInput.length === 0) {
            setPasswordError("");
            setDisableBtn(true);
        }
    }

    const handleSingInWithGoogle = () => {
        setError("");

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <main role='main' style={{ minHeight: "calc(100vh - 20vh)", backgroundImage: `url(${loginBG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className='text-center pt-5 text-light'>Please Login</h2>
            <section className='d-flex justify-content-center align-items-center'>
                <LoginForm email={email} password={password} error={error} success={success} emailError={emailError} passwordError={passwordError} disableBtn={disableBtn} handleSignin={handleSignin} handleEmail={handleEmail} handlePassowrd={handlePassowrd} />
            </section>
            <section className='d-flex justify-content-center align-items-center pb-5'>
                <button onClick={handleSingInWithGoogle} className='btn btn-primary fw-semibold mx-2 my-2'><FcGoogle /> Google Login</button>
            </section>
        </main>
    );
};

export default Login;