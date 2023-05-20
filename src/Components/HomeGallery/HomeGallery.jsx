// eslint-disable-next-line no-unused-vars
import React from "react";
import galleryImg1 from '../../assets/galleryImages/galleryImg1.jpg'
import galleryImg2 from '../../assets/galleryImages/galleryImg2.jpg'
import galleryImg3 from '../../assets/galleryImages/galleryImg3.jpg'
import galleryImg4 from '../../assets/galleryImages/galleryImg4.jpg'
import galleryImg5 from '../../assets/galleryImages/galleryImg5.jpg'
import galleryImg6 from '../../assets/galleryImages/galleryImg6.jpg'
import './HomeGallery.css'

const HomeGallery = () => {
  return (
    <div className="container-fluid mt-3 w-75 mx-auto myGallery">
      <div className="row">
        <div className="col-sm-4 col-md-4 overflow-hidden firstImgDiv">
            <img src={galleryImg1} alt=""></img>
        </div>
        <div className="col-sm-8 col-md-8">
          <div className="row">
            <div className="col overflow-hidden">
                <img className="img-fluid" src={galleryImg2} alt="" />
            </div>
          </div>
          <div className="row mt-sm-3 mt-md-4 mt-0 ">
            <div className="col">
                <img className="img-fluid" src={galleryImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 gallerySecondPart">
        <div className="col-sm-4 col-md-4 lastImgDiv">
            <img src={galleryImg4} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-4 col-md-4 secondLastImgDiv">
            <img src={galleryImg5} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-4 col-md-4">
            <img src={galleryImg6} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
