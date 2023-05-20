// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';
import Gif404 from '../../assets/gifs/404.gif'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useTitle("Error Page");
    return (
        <>
            <figure className='d-flex justify-content-center align-items-center' style={{width: "100vw", height: "90vh"}}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={Gif404} alt="Page Not Found Gif" />
                    <Link to="/"><Button className='bg-dark py-3 px-4 border-0'>Back To The Home Page?</Button></Link>
                </div>
            </figure>
        </>
    );
};

export default ErrorPage;