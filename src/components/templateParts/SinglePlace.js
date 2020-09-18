import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { UserContext } from '../../App';



const SinglePlace = () => {
    //** Data Come Form Context API */
    const [travels, setTravels, loggedInUser, setLoggedInUser] = useContext(UserContext)


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

            <div className="col-md-7 extra-width">
                <div className="travel-slider">

                    {
                        loggedInUser.map(card => <Link to={"/destination/" + card.key}> <div className="place-box">  <Card key={card.key} card={card}></Card> </div> </Link>)
                    }



                </div>
            </div>



        </div>
    );
};

export default SinglePlace;