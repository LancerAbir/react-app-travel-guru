import React, { useContext } from 'react';
import LightHeader from '../layout/Light Header/LightHeader';
import Gmap from '../layout/Google map/Gmap';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import HotelRooms from './HotelRooms';



const Hotel = () => {

    //** Data Come Form Context API */
    const [travels, setTravels, loggedInUser, setLoggedInUser] = useContext(UserContext)

    //** Dynamic Key Single Place */
    const { HotelKey } = useParams()
    const hotelRoom = loggedInUser.find(sc => sc.key === HotelKey)
    const { name } = hotelRoom


    return (

        <div>
            <div className="container">
                <LightHeader></LightHeader>
            </div>

            <section className="hotel-room">
                <div className="container">
                    <div className="hotel-header">
                        <h6>252 stays Apr 13-17 3 guests</h6>
                        <h5>Stay in {name}</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            {
                                hotelRoom.hotel.map(rooms => <div className="single-hotel d-flex"> <HotelRooms rooms={rooms}></HotelRooms> </div>)
                            }
                        </div>
                        <div className="col-md-5">
                            <div className="google-map">
                                <Gmap hotelRoom={hotelRoom}></Gmap>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Hotel;