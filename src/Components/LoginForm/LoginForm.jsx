// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LoginForm = ({ email, error, success, emailError, password, passwordError, disableBtn, handleSignin, handleEmail, handlePassowrd }) => {
    return (
        <div>
            <Form onSubmit={handleSignin} style={{ background: "#e7e7e0", maxWidth: "720px", minWidth: "350px" }} className='px-4 py-5 border rounded-3 my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<span className='fs-3'>*</span></Form.Label>
                    <Form.Control className='mb-2' type="email" value={email} onChange={handleEmail} name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        {
                            emailError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                        }
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password<span className='fs-3'>*</span></Form.Label>
                    <Form.Control className='mb-2' type="password" value={password} onChange={handlePassowrd} name='password' placeholder="Password" />
                    <Form.Text className="text-muted">
                        {
                            passwordError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{passwordError}</p> : "Your password is safe."
                        }
                    </Form.Text>
                </Form.Group>

                <Form.Text className="text-muted">
                    <p className='mt-4'>New to this website? <Link to='/registration'>Register Here</Link></p>
                </Form.Text>
                <Button disabled={disableBtn} className='text-dark fw-semibold border-0 mb-3 bg-dark' type="submit">
                    Login
                </Button>

                <div>
                    {
                        error !== "" ? <p className='text-danger'>{error}</p> : <p className='text-success fw-bold'>{success}</p>
                    }
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;