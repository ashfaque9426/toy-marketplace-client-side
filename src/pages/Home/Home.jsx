// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <main role='main'>
            <h2>This Is Home</h2>
        </main>
    );
};

export default Home;