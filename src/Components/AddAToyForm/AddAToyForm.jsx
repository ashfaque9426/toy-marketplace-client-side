// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddAToyForm.css'

const AddAToyForm = ({ handleAddAToy }) => {
    
    return (
        <Form onSubmit={handleAddAToy} style={{ maxWidth: "768px", minWidth: "350px", backgroundColor: "#e7e7e0"}} className='mx-auto px-5 py-5 rounded-3 addAToyForm'>
            <section className='d-flex flex-column flex-md-row gap-3'>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control type="text" name='toyName' placeholder="Figure Name" />
                </Form.Group>
            </section>
            <section className='d-flex flex-column flex-md-row gap-3'>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
            </section>
            <section className='d-flex flex-column flex-md-row gap-3'>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Sub Categoy</Form.Label>
                    <Form.Control type="text" name='subCategory' placeholder="Sub Categoy" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Enter Price" />
                </Form.Group>
            </section>
            <section className='d-flex flex-column flex-md-row gap-3'>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" name='rating' placeholder="Enter Rating" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control type="text" name='availableQuantity' placeholder="Enter Quantity" />
                </Form.Group>
            </section>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Detail Description</Form.Label>
                <Form.Control as="textarea" name='detailDescription' placeholder="Enter Description" />
            </Form.Group>
            
            <Button className='bg-dark border-0' type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddAToyForm;