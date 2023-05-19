// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


const ModalForHomePage = (props) => {
    const singleItemData = props.singletoydata;
    const {_id, imgUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription} = singleItemData;
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {toyName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <figure>
                    <img className='w-100 h-100' src={imgUrl} alt="Action Figure Image" />
                </figure>
                <section className='text-center'>
                    <p className='fs-5 fw-semibold mt-5 mb-2'>Seller Name: <span className='fw-bold'>{sellerName}</span></p>
                    <p className='fs-5 fw-semibold'>Email: <span className='fw-bold'>{sellerEmail}</span></p>
                    <p className='fs-5 fw-semibold'>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <p className='fw-bold'>Available: {availableQuantity} Figures</p>
                    <p className='text-start'><span className='fw-bold'>Detail Description: </span> {detailDescription}</p>
                </section>
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/singleToyDetails/${_id}`}><Button className='bg-dark border-0'>Order Confirmation</Button></Link>
                <Button className='bg-dark border-0' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForHomePage;