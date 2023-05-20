// eslint-disable-next-line no-unused-vars
import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blogs.css'

const Blogs = () => {
    useTitle("Blog");
    return (
        <main className='qaContainer d-flex justify-content-center align-items-center' style={{height: "calc(100vh - 20vh)"}} role='main'>
            <div>
                <h2 className='my-5 text-center'>Blog About Q&A</h2>
                <section className='mx-auto qaSection'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>What is an access token and refresh token? How do they work and where should we store them on the client-side?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        <strong>Access Token: </strong> An Access Token is a token which is used for authenticate a user and issued by the server side. It is basically used for protecting resources web services. Access Token has an expiration Time. Access Token is sent with every request. After receiving the Access Token the server verifies it and depending on that the server side grants the access otherwise it restricts the access.
                                    </p>
                                    <p className='mt-2'>
                                        <strong>Refresh Token: </strong> Unlike Access Token a Refresh token has a longer expiration time. It&apos;s purpose to obtain a new access token while the current one get expired. It requests for a new Access Token when the previous one expires.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Compare SQL and NoSQL databases?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        <strong>SQL-Database: </strong> A SQL Databse is based on a model of tabular format which is regid. SQL Database structure is fixed and it enforce data integrity for its confinement nature.
                                    </p>

                                    <p className='mt-2'>
                                        <strong>NO-SQL-Database: </strong> Unlike a SQL-DATABASE, NO-SQL-DATABASE is restructurable and Flexible. Which means it can store data structured in various format.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong>What is express js? What is Nest JS?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        <strong>Express.js: </strong> Express js is a framework based on node js. It offers a minimalistic and simpler way of writting down a web server. It provides lightweight middleware layer to handle routing. It offers asynchronous and event driven nature and handling the the server side using javaScript. Where as javaScript is used for handling client application before.
                                    </p>
                                    <p className="mt-2">
                                        <strong>Next.js: </strong> Next js is a React framwork which allows buiding application rendered by server side or static or a combination of both. It offers wide range of useful features out of the box which makes complex react application easier to build. It supports SEO optimization as well.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <strong>What is MongoDB aggregate and how does it work?</strong>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p><strong>MongoDB aggregate: </strong> <span className='fw-semibold'>MongoDB aggregation functionality offers aggregation operation on data collections based on its Stages. Some exaple of Stages are</span> <strong>$match,</strong> <strong>$sort,</strong> <strong>$limit.</strong></p>
                                    <p className='mt-3 mb-2'><strong>Match Stage: </strong> Which filters out documents by the specified condtion applied.</p>
                                    <p className='mb-2'><strong>Sort Stage: </strong> Which gives sorting functionality and retuns a collection of sorted data as requested.</p>
                                    <p className='mb-2'><strong>Limit Stage: </strong> Which limits the amount of collection objects has been returned.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Blogs;