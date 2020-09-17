import React from 'react';
import { Link } from 'react-router-dom';

const SinglePlaceHeader = () => {
    // const { name } = props.travel
    return (
        <div className="travel-header">
            <h1> sundorban </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aut.</p>
            <Link to="/destination">
                <button className="section-btn">Booking</button>
            </Link>
        </div>
    );
};

export default SinglePlaceHeader;