// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpdateModal = (props) => {
    const { _id, price, availableQuantity, detailDescription  } = props.toy
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Your Informations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='text-center fw-bold'>Available Fields</h4>
                <form>
                    <fieldset className='d-flex flex-column gap-3 border py-4 px-3'>
                        <div className='d-flex gap-2'>
                            <fieldset className='w-100'>
                                <label className='d-block fw-bold' htmlFor="price">Price</label>
                                <input className='w-100' type="text" defaultValue={price} name="price" id="price" />
                            </fieldset>
                            <fieldset className='w-100'>
                                <label className='d-block fw-bold' htmlFor="availableQuantity">Quantity</label>
                                <input className='w-100' type="text" defaultValue={availableQuantity} name="availableQuantity" id="availableQuantity" />
                            </fieldset>
                        </div>
                        <fieldset>
                            <label className='d-block fw-bold' htmlFor="detailDescription">Description</label>
                            <input type="text" defaultValue={detailDescription} name="detailDescription" id="detailDescription" />
                        </fieldset>
                    </fieldset>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.handleUpdate(_id)}>Update</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal;