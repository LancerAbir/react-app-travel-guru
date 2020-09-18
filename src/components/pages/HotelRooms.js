import React from 'react';
import roomOne from '../../images/Image/Rectangle 26.png';
import starIcon from '../../images/Icon/star_1_.png';


const HotelRooms = (props) => {

    const { hotelImg, hotelName, guest, bed, bath } = props.rooms

    return (
        <>
            <img src={hotelImg} alt="" />
            <div className="hotel-details">
                <h6>{hotelName}</h6>
                <p> {guest} guests {bed} bedrooms 2 beds {bath} baths
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
        </>
    );
};

export default HotelRooms;