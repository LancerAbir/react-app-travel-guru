import React from 'react';
import LightHeader from '../layout/Light Header/LightHeader';
import roomOne from '../../images/Image/Rectangle 26.png';
import roomTwo from '../../images/Image/Rectangle 27.png';
import roomThree from '../../images/Image/Rectangle 28.png';
import starIcon from '../../images/Icon/star_1_.png';
import Gmap from '../layout/Google map/Gmap';

const Hotel = () => {
    return (
        <div>
            <div className="container">
                <LightHeader></LightHeader>
            </div>

            <section className="hotel-room">
                <div className="container">
                    <div className="hotel-header">
                        <h6>252 stays Apr 13-17 3 guests</h6>
                        <h5>Stay in Cox’s Bazar</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="single-hotel d-flex justify-content-between">
                                <img src={roomOne} alt="" />
                                <div className="hotel-details">
                                    <h6>Light bright airy stylish apt & safe peaceful stay </h6>
                                    <p> 4 guests 2 bedrooms 2 beds 2 baths
                                    <br /> Wif Air conditioning Kitchen
                                    <br /> Cancellation fexibility availiable
                                </p>
                                    <div className="review d-flex justify-content-between">
                                        <div className="rating">
                                            <img src={starIcon} alt="" />
                                            <p> 4.9 (20)</p>
                                        </div>
                                        <div className="rate">
                                            <p><span>$34/</span>night <small>$167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-hotel d-flex justify-content-between">
                                <img src={roomTwo} alt="" />
                                <div className="hotel-details">
                                    <h6>Light bright airy stylish apt & safe peaceful stay </h6>
                                    <p> 4 guests 2 bedrooms 2 beds 2 baths
                                    <br /> Wif Air conditioning Kitchen
                                    <br /> Cancellation fexibility availiable
                                </p>
                                    <div className="review d-flex justify-content-between">
                                        <div className="rating">
                                            <img src={starIcon} alt="" />
                                            <p> 4.9 (20)</p>
                                        </div>
                                        <div className="rate">
                                            <p><span>$34/</span>night <small>$167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-hotel d-flex justify-content-between">
                                <img src={roomThree} alt="" />
                                <div className="hotel-details">
                                    <h6>Light bright airy stylish apt & safe peaceful stay </h6>
                                    <p> 4 guests 2 bedrooms 2 beds 2 baths
                                    <br /> Wif Air conditioning Kitchen
                                    <br /> Cancellation fexibility availiable
                                </p>
                                    <div className="review d-flex justify-content-between">
                                        <div className="rating">
                                            <img src={starIcon} alt="" />
                                            <p> 4.9 (20)</p>
                                        </div>
                                        <div className="rate">
                                            <p><span>$34/</span>night <small>$167 total</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="google-map">
                                <Gmap></Gmap>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Hotel;