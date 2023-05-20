// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllToysTableRow = ({index, toy}) => {
    const { _id, sellerName, toyName, subCategory, price, availableQuantity} = toy;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td className='text-center'>{availableQuantity}</td>
            <td><Link to={`/singleToyDetails/${_id}`}><Button className='bg-dark border-0'>View Details</Button></Link></td>
        </tr>
    );
};

export default AllToysTableRow;