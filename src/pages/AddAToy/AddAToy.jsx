// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';
import AddAToyForm from '../../Components/AddAToyForm/AddAToyForm';
import './AddAToy.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddAToy = () => {
    useTitle("Add A Toy");
    const navigate = useNavigate();

    const handleAddAToy = e => {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.name.value;
        const sellerEmail = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;

        const infoObj = {
            imgUrl,
            toyName,
            sellerName,
            sellerEmail,
            category: "PC/Nintendo/PS4 Game",
            subCategory,
            price,
            detailDescription,
            availableQuantity,
            rating
        }

        fetch('https://b7a11-toy-marketplace-server-side-ashfaque9426.vercel.app/addAToy', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(infoObj)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                form.reset();
                toast("Item Successfully Added");
                navigate('/my-toys', {replace: true});
            }
        })
    }

    return (
        <main className='addAToyMainContainer' role='main'>
            <h2 className='text-center my-5'>Add Your Toy</h2>
            <section className='mb-5'>
                <AddAToyForm handleAddAToy={handleAddAToy} />
            </section>
        </main>
    );
};

export default AddAToy;