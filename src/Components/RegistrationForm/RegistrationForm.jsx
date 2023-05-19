// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

const RegistrationForm = ({ handleRegistration, handleEmail, handlePassword, success, error, emailError, passwordError, disableBtn, redirection, email, password }) => {
    return (
        <div>
            <Form onSubmit={handleRegistration} style={{ background: "#e7e7e0", maxWidth: "720px", minWidth: "350px" }} className='px-4 py-5 border rounded-3 mt-4 mb-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<span className='fs-3'>*</span></Form.Label>
                    <Form.Control className='mb-2' type="email" value={email} onChange={handleEmail} name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        {
                            emailError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                        }
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password<span className='fs-3'>*</span></Form.Label>
                    <Form.Control className='mb-2' type="password" value={password} onChange={handlePassword} name='password' placeholder="Password" />
                    <Form.Text className="text-muted">
                        {
                            passwordError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{passwordError}</p> : "Your Password is safe"
                        }
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>PhotoUrl</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo Url" />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className='mt-4'>Already Have an account? <Link to='/login'>Please Login</Link></p>
                </Form.Text>
                <Button disabled={disableBtn} style={{ backgroundColor: '#bfc0c3' }} className='text-dark fw-semibold border-0 mb-3' type="submit">
                    Register
                </Button>

                {
                    error !== "" ? <p className='text-danger'>{error}</p> : <p className='text-success fw-bold'>{success}</p>
                }
            </Form>
            {
                redirection && <Navigate to='/login' replace={true} />
            }
        </div>
    );
};

export default RegistrationForm;