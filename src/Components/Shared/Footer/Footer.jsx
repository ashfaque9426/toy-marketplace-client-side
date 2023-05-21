// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { GrPinterest, GrYoutube } from 'react-icons/gr';
import { TfiTwitter } from 'react-icons/tfi';
import './Footer.css'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#e7e7e0"}}>
            <section className='d-flex flex-column flex-md-row justify-content-md-between align-items-start pt-5 px-5 pb-4 gap-3'>
                <div>
                    <h5>Shop</h5>
                    <section>
                        <p>Gift Cards</p>
                        <p>More Action Figures</p>
                        <p>Sitemap</p>
                        <p>Figurama Blog</p>
                        <p>Figurama Bangladesh</p>
                        <p>Figurama United Kingdom</p>
                        <p>Figurama Germany</p>
                        <p>Figurama Canada</p>
                    </section>
                </div>
                <div>
                    <h5>Sell</h5>
                    <section>
                        <p>Sell on Figurama</p>
                        <p>Teams</p>
                        <p>Forums</p>
                        <p>Affiliates & Creators</p>
                    </section>
                </div>
                <div>
                    <h5>About</h5>
                    <section>
                        <p>Figurama, Inc.</p>
                        <p>Policies</p>
                        <p>Investors</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Impact</p>
                        <p>Legal Imprint</p>
                    </section>
                </div>
                <div>
                    <h5>Help</h5>
                    <section>
                        <p>Help Center</p>
                        <p>Privacy settings</p>
                        <Button className='bg-dark border-0'>Download the Figurama App</Button>
                        <div className='d-flex justify-content-between mt-3 fs-3'>
                            <FaInstagram />
                            <FaFacebookSquare />
                            <GrPinterest />
                            <TfiTwitter />
                            <GrYoutube />
                        </div>
                    </section>
                </div>
            </section>
            <section className='d-flex flex-column flex-md-row justify-content-md-between align-items-center bg-dark text-light px-5 py-3 footerSecondSection'>
                <p>Terms of Use</p>
                <p>Privaacy</p>
                <p>@2023 Figurama, Inc</p>
                <p>Internet-based ads</p>
                <p>Local Shares</p>
            </section>
        </footer>
    );
};

export default Footer;