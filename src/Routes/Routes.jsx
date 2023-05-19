// eslint-disable-next-line no-unused-vars
import React from 'react';
import App from '../App';
import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddAToy from '../pages/AddAToy/AddAToy';
import Blogs from '../pages/Blogs/Blogs';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import SingleToyDetail from '../pages/SingleToyDetail/SingleToyDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'all-toys',
                element: <AllToys />
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: 'add-a-toy',
                element: <PrivateRoute><AddAToy /></PrivateRoute>
            },
            {
                path: 'singleToyDetails/:id',
                element: <PrivateRoute><SingleToyDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426-hko3p6w1c.vercel.app/singleToyDetail/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Register />
            }
        ]
    },
]);

export default router;