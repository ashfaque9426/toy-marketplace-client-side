// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle("My Toys");
    return (
        <main role='main'>
            <h2>Your Collection</h2>
            <section></section>
        </main>
    );
};

export default MyToys;