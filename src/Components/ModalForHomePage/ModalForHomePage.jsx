// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalForHomePage = (props) => {
    const singleItemData = props.singletoydata;
    const {imgUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription} = singleItemData;
    console.log(imgUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription)
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
                <section>
                    <p className='fs-5 fw-semibold mt-5 mb-2'>Seller Name: <span className='fw-bold'>{sellerName}</span></p>
                    <p className='fs-5 fw-semibold'>Email: <span className='fw-bold'>{sellerEmail}</span></p>
                    <p className='fs-5 fw-semibold'>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <p className='fw-bold'>Available: {availableQuantity} Figures</p>
                    <p><span className='fw-bold'>Detail Description: </span> {detailDescription}</p>
                </section>
            </Modal.Body>
            <Modal.Footer>
                <Button className='bg-dark border-0'>Order Now</Button>
                <Button className='bg-dark border-0' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForHomePage;