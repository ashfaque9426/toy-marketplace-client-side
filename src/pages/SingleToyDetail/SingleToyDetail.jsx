// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './SingleToyDetails.css'
import useTitle from '../../hooks/useTitle';

const SingleToyDetail = () => {
    useTitle("Single Toy");
    const singleActionFigure = useLoaderData();
    const { imgUrl, toyName, sellerName, sellerEmail, price, availableQuantity, rating, detailDescription } = singleActionFigure;
    return (
        <main className='singleToyDetailMainContainer' role='main'>
            <h2 className='my-5 text-center singleToyHeadi'>Single Toy Details</h2>
            <article className='d-flex flex-column flex-md-row-reverse justify-content-center align-items-center px-3'>
                <figure className='w-50 singleFigImg' data-aos="fade-left">
                    <img  className='w-100' src={imgUrl} alt="" />
                </figure>
                <section className='text-center pt-5 w-50 singleFigContainer' data-aos="fade-right">
                    <h4 className='fw-bold'>{toyName}</h4>
                    <p className='fs-5 fw-semibold mt-3'><span className='fw-bold'>Seller Name:</span> {sellerName}</p>
                    <p className='fs-5 fw-semibold'><span className="fw-bold">Seller Email:</span> {sellerEmail}</p>
                    <p className='fs-5 fw-semibold'><span className="fw-bold">Price:</span> {price}</p>
                    <p className='fs-5 fw-semibold'><span className="fw-bold">Available:</span> {availableQuantity} Figures</p>
                    <p className='fs-5 fw-semibold'><span className="fw-bold">Ratings:</span> {rating}</p>
                    <p className='w-50 mx-auto fw-semibold singleDetailDesc'><span className='fw-bold'>Detail Description:</span> {detailDescription}</p>
                    <Button className='bg-dark border-0'>Order Now</Button>
                </section>
                
            </article>
        </main>
    );
};

export default SingleToyDetail;