// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    useTitle("My Toys");
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(()=> {
        fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426.vercel.app/userToys?email=${user?.email}&value=price`, {
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
    }, [user])

    return (
        <main role='main'>
            <h2 className='text-center my-5'>Your Collection</h2>
            <section>
                <p>{myToys.length}</p>
            </section>
        </main>
    );
};

export default MyToys;