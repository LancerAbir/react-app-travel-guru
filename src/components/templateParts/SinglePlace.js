import React from 'react';
import { Link } from 'react-router-dom';
import CoxBazar from '../../images/Image/Rectangle 1.png'
import Sundarban from '../../images/Image/sundorbon.png'
import Sreemangal from '../../images/Image/Sreemongol.png'
import Sajek from '../../images/Image/Sajek.png'
// import travelData from '../../travelData';



const SinglePlace = () => {
    // const [travels, setTravels] = useState(travelData)

    return (
        <div className="travel-slide d-flex">
            <div className="col-md-5">
                <div className="travel-header">
                    <h1> sundorban </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aut.</p>
                    <Link to="/destination">
                        <button className="section-btn">Booking</button>
                    </Link>
                </div>
            </div>

            <div className="travel-slider d-flex">
                <Link to="/destination">
                    <div className="place-box">
                        <img src={CoxBazar} alt="" />
                        <h5>Cox's bazar</h5>
                    </div>
                </Link>
                <Link to="/destination">
                    <div className="place-box">
                        <img src={Sundarban} alt="" />
                        <h5>Cox's bazar</h5>
                    </div>
                </Link>
                <Link to="/destination">
                    <div className="place-box">
                        <img src={Sreemangal} alt="" />
                        <h5>Cox's bazar</h5>
                    </div>
                </Link>
                <Link to="/destination">
                    <div className="place-box">
                        <img src={Sajek} alt="" />
                        <h5>Cox's bazar</h5>
                    </div>
                </Link>
            </div>


        </div>
    );
};

export default SinglePlace;