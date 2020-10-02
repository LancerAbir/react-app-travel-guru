import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { UserContext } from '../../App';
import Carousel from 'react-elastic-carousel'




const SinglePlace = () => {
    //** Data Come Form Context API */
    const [travels, setTravels, loggedInUser, setLoggedInUser] = useContext(UserContext)

    const placeName = loggedInUser.map(hd => hd.name)
    const placeDescription = loggedInUser.map(hd => hd.descriptionHome)
    const placeKey = loggedInUser.map(hd => hd.key)
    const currentKey = placeKey[0]

    return (
        <div className="travel-slide d-flex">
            <div className="col-md-5">
                <div className="travel-header">
                    <h1> {placeName[0]} </h1>
                    <p>{placeDescription[0]}</p>
                    <Link to={"/destination/" + currentKey}>
                        <button className="section-btn">Booking</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-7 extra-width">
                <div className="travel-slider">
                    <Carousel itemsToShow={2}>
                        {
                            loggedInUser.map(card => <Link to={"/destination/" + card.key}> <div className="place-box">  <Card key={card.key} card={card}></Card> </div> </Link>)
                        }
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default SinglePlace;