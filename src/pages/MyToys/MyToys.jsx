// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import Table from 'react-bootstrap/Table';
import MyToysTableRow from '../../Components/MyToysTableRow/MyToysTableRow';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle("My Toys");
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [ascendingDescending, setAscendingDescending] = useState("ascending");

    const handleUpdate = id => {
        const price = document.getElementById("price").value;
        const availableQuantity = document.getElementById("availableQuantity").value;
        const detailDescription = document.getElementById("detailDescription").value;
        console.log(id, price, availableQuantity, detailDescription);

        if(price !== "" || availableQuantity !== "" || detailDescription !== "") {

            const updateInfo = {
                price,
                availableQuantity,
                detailDescription
            }

            fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426.vercel.app/toyCollection/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateInfo)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast("Update Successfull");
                    setRefresh(!refresh);
                }
            })
        }
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426.vercel.app/toyCollection/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            setRefresh(!refresh);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handleAscendingDescending = e => {
        const orderByPrice = e.target.value;
        setAscendingDescending(orderByPrice);
    }

    useEffect(()=> {
        fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426.vercel.app/userToys?email=${user?.email}&value=price&type=${ascendingDescending}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('figurama-secret-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyToys(data);
        })
    }, [user, refresh, ascendingDescending])

    return (
        <main role='main'>
            <h2 className='text-center my-5'>Your Collection</h2>
            <section className='text-center mb-5'>
                <select className='py-1 px-1' onChange={handleAscendingDescending}>
                    <option value="ascending">Ascending by price</option>
                    <option value="descending">Descending by price</option>
                </select>
            </section>
            <section>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className='text-center'>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((toy, index) => <MyToysTableRow key={toy._id} toy={toy} index={index} handleUpdate={handleUpdate} handleDelete={handleDelete} />)
                        }
                    </tbody>
                </Table>
            </section>
        </main>
    );
};

export default MyToys;