// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';

const Register = () => {
    useTitle('Register');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [disableBtn, setDisableBtn] = useState(true);
    const [redirection, setRedirection] = useState(false);

    const { createUser, updataUserProfile, logOut } = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;

                if (name && photoUrl || name || photoUrl) {
                    updataUserProfile(loggedUser, name, photoUrl)
                        .then(() => {
                            console.log(loggedUser);
                        })
                        .catch(error => console.log(error.message))
                }

                setEmail("");
                setPassword("");
                setSuccess("Registration Successfull");
                logOut();
                setTimeout(() => {
                    setRedirection(true)
                }, 1000)
            })
            .catch(error => {
                setError(error.message);
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

    const handlePassword = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        setPasswordError('')

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
    return (
        <main role='main'>
            <h2 className='text-center mt-5'>Register Now</h2>
            <section className='d-flex justify-content-center align-items-center'>
                <RegistrationForm handleRegistration={handleRegistration} handleEmail={handleEmail} handlePassword={handlePassword} success={success} error={error} emailError={emailError} passwordError={passwordError} disableBtn={disableBtn} redirection={redirection} email={email} password={password}  />
            </section>
        </main>
    );
};

export default Register;