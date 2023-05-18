// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle("Error Page");
    return (
        <>
            <h1>404 not found</h1>
        </>
    );
};

export default ErrorPage;