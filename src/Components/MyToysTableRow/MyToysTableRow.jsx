// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import UpdateModal from '../UpdateModal/UpdateModal';

const MyToysTableRow = ({ index, toy, handleUpdate, handleDelete }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { _id, imgUrl, sellerName, sellerEmail, toyName, subCategory, detailDescription, price, availableQuantity } = toy;
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img style={{height: "75px", width: "100%", objectFit: "cover"}} src={imgUrl} alt="Figure Image" /></td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{detailDescription}</td>
            <td>${price}</td>
            <td className='text-center'>{availableQuantity}</td>
            <td><Button variant="primary" onClick={() => setModalShow(true)} className='bg-dark border-0'>Update</Button></td>
            <td><Button onClick={() => handleDelete(_id)} className='bg-dark border-0'>Delete</Button></td>
            <UpdateModal
                toy={toy}
                handleUpdate={handleUpdate}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </tr>
    );
};

export default MyToysTableRow;