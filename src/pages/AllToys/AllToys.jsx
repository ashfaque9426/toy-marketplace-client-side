// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Table from 'react-bootstrap/Table';
import AllToysTableRow from '../../Components/AllToysTableRow/AllToysTableRow';
import { Button } from 'react-bootstrap';

const AllToys = () => {
    useTitle("All Toys");
    const [allToys, setAllToys] = useState([]);

    const searchHandler = e => {
        const inputFieldValue = e.target.previousElementSibling.value;
        if(inputFieldValue !== "" || inputFieldValue !== " ") {
            const whiteSpacesRemovedValue = inputFieldValue.replace(/ /g, "%20");
            console.log(whiteSpacesRemovedValue)
            fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426-hko3p6w1c.vercel.app/toyCollection/${whiteSpacesRemovedValue}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
        }
    }

    useEffect(()=> {
        fetch("https://b7a11-toy-marketplace-server-side-ashfaque9426-hko3p6w1c.vercel.app/toyCollection?limit=20")
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])

    return (
        <main role='main'>
            <h2 className='text-center mt-5 mb-4'>Search Here</h2>
            <section className='d-flex justify-content-center align-items-center mb-5'>
                <input className='ps-2 pb-1 pt-1 rounded-2' placeholder='Figure Name' type="text"/>
                <Button onClick={searchHandler} className='bg-dark border-0 ms-1'>Search</Button>
            </section>
            <h2 className='text-center mt-5 mb-4'>Browse Figures</h2>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th className='text-center'>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map((toy, index) => <AllToysTableRow key={toy._id} toy={toy} index={index} />)
                    }
                </tbody>
            </Table>
        </main>
    );
};

export default AllToys;