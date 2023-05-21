// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';
import AFCleaning1 from '../../assets/MaintenanceSectionImages/AFCleaning1.jpg';
import AFDisplay1 from '../../assets/MaintenanceSectionImages/AFDisplay1.jpg';
import AFWarning1 from '../../assets/MaintenanceSectionImages/AFWarning1.jpg';
import CustomizationImg from '../../assets/MaintenanceSectionImages/Customization.jpg';
import AFFaq1 from '../../assets/MaintenanceSectionImages/AFFaq1.jpg'

const FiguramaMaintenanceSection = () => {
    return (
        <section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 my-5 px-4'>
            <article className='figCareArticle'>
                <h5>Cleaning and Dusting</h5>
                <p>Offer Step-by-stem guides and video tutorials on how to clean and dust without causing and damage. Share recomended tolls, techniques, and cleaning products that are same to use on different types of materials such as resin, PVC or metal</p>
                <figure>
                    <img src={AFCleaning1} alt="Action Figure Cleaning Image" className='img-fluid object-fit-cover' />
                </figure>
                <Button className='bg-dark border-0'>Visit Cleanup And Dusting</Button>
            </article>
            <article className='figCareArticle'>
                <h5>Display and Storage</h5>
                <p>Provide recommendations on how to creat and ideal display setup for Action Figures, including lighting considerations and avoiding direct sunlight exposure. Additionally, offer guidance on proper storage techniques to prevent dust.</p>
                <figure className='overflow-hidden'>
                    <img src={AFDisplay1} alt="Action Figure Cleaning Image" className='img-fluid object-fit-cover' />
                </figure>
                <Button className='bg-dark border-0'>Visti Display and Storage</Button>
            </article>
            <article className='figCareArticle'>
                <h5>Precautions and Warnings</h5>
                <p>Highlight important precautions and warnings, such as keeping action figures away from small children or pets who may accidentally damage them. Remind collectors to handle figures with care and avoid exposing them to chemicals or harsh cleaning agents.</p>
                <figure>
                    <img src={AFWarning1} alt="Action Figure Cleaning Image" className='img-fluid object-fit-cover' />
                </figure>
                <Button className='bg-dark border-0'>Visit Precautions and Warning</Button>
            </article>
            <article className='figCareArticle'>
                <h5>Customization Guidelines</h5>
                <p>If you encourage action figure customization, provide guidelines on how to modify or customize figures safely and effectively. Include tips on using appropriate tools, adhesives, and paints, as well as considerations for maintaining the structural integrity of the figures.</p>
                <figure>
                    <img src={CustomizationImg} alt="Action Figure Cleaning Image" className='img-fluid object-fit-cover' />
                </figure>
                <Button className='bg-dark border-0'>Visit Precautions and Warning</Button>
            </article>
            <article className='figCareArticle'>
                <h5>Frequently Asked Questions</h5>
                <p>Compile a list of frequently asked questions related to care and maintenance. Address common concerns or issues raised by collectors and provide helpful answers and solutions. We Provide Customer Care Sytem Care All the time for better Action Figure Management.</p>
                <figure>
                    <img src={AFFaq1} alt="Action Figure Cleaning Image" className='img-fluid object-fit-cover' />
                </figure>
                <Button className='bg-dark border-0'>Visit FAQ Page</Button>
            </article>
        </section>
    );
};

export default FiguramaMaintenanceSection;