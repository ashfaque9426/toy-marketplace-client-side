// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselForHome.css'
import actionFigureOne from '../../assets/sliderImages/actionFigureOne.jpg';
import actionFigureTwo from '../../assets/sliderImages/actionFigureTwo.jpg';
import actionFigureUpdated from '../../assets/sliderImages/actionFigureUpdated.jpg'


const CarouselForHome = () => {
    return (
        <Carousel className='myCarouselSlider' role='banner'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={actionFigureTwo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='display-1'>Figurama</h3>
                    <p className='fw-semibold'>The Ultimate Gaming Action Figure Hub For Gamming Comutity</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={actionFigureOne}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Pick Your Taste</h3>
                    <p className='fw-semibold'>Here cooler PC/PS4/Nintendo NPC&apos;s Action Figures are available.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={actionFigureUpdated}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>You Won&apos;t Dissapoint</h3>
                    <p className='fw-semibold'>
                        If you are a fan of Gamming Action Figures, Here You Go.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselForHome;