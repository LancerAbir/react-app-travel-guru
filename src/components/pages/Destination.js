import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import DarkHeader from '../layout/Dark Header/DarkHeader';
import ThemeDatePicker from '../layout/Date Picker/ThemeDatePicker';


const Destination = () => {
    //** Data Come Form Context API */
    const [travels, setTravels, loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);

    return (
        <div>
            <div className="section-padding">
                <div className="container">
                    <DarkHeader></DarkHeader>
                </div>

                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="travel-header">
                                    <h1>Cox's bazar</h1>
                                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its
                                    very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli
                                    Beach in the south. Aggameda Khyang monastery is home to bronze statues and
                                    centuries-old Buddhist manuscripts. South of town, the tropical rainforest of
                                    Himchari National Park has waterfalls and many birds. North, sea turtles breed
                                    on nearby Sonadia Island.</p>
                                </div>
                            </div>

                            <div className="col-md-5 ml-auto">
                                <div className="destination-box">

                                    <form className="bg-white">
                                        <div className="form-group">
                                            <label htmlFor="">Origin</label>
                                            <select className="custom-select" required>
                                                <option value="">Dhaka</option>
                                                <option value="1">Chittagong</option>
                                                <option value="2">Khulna</option>
                                                <option value="3">Sylhet</option>
                                                <option value="3">Rajshahi</option>
                                                <option value="3">Mymensingh</option>
                                                <option value="3">Barisal</option>
                                                <option value="3">Rangpur</option>
                                                <option value="3">Comilla</option>
                                                <option value="3">Narayanganj</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Destination</label>
                                            <select className="custom-select" required>
                                                <option value="">Cox’s Bazar</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6 date-picker">
                                                <label htmlFor="">Form</label>
                                                <ThemeDatePicker></ThemeDatePicker>
                                            </div>
                                            <div className="form-group col-md-6 date-picker">
                                                <label htmlFor="">To</label>
                                                <ThemeDatePicker></ThemeDatePicker>
                                            </div>
                                        </div>
                                        <Link to='/hotel'>
                                            <button type="submit" className="btn col-md-12 section-btn">Start Booking</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                </section>
            </div>
        </div>
    );
};

export default Destination;