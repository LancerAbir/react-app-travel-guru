import React from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../layout/Dark Header/DarkHeader';

const Destination = () => {
    return (
        <div>
            <div className="section-padding">
                <div className="container">
                    <DarkHeader></DarkHeader>
                </div>

                <section class="banner">
                    <div class="wrapper">
                        <div class="row">
                            <div class="d-flex justify-content-between">
                                <div class="travel-slide d-flex justify-content-between">
                                    <div class="col-md-6">
                                        <div class="travel-header">
                                            <h1>Cox's bazar</h1>
                                            <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its
                                            very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli
                                            Beach in the south. Aggameda Khyang monastery is home to bronze statues and
                                            centuries-old Buddhist manuscripts. South of town, the tropical rainforest of
                                            Himchari National Park has waterfalls and many birds. North, sea turtles breed
                                            on nearby Sonadia Island.
                                    </p>

                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="destination-box">



                                            <form class="bg-white">
                                                <div class="form-group">
                                                    <label for="">Origin</label>
                                                    <select class="custom-select" required>
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
                                                        <option value="3">Narayanganj</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label for="">Destination</label>
                                                    <select class="custom-select" required>
                                                        <option value="">Cox’s Bazar</option>
                                                    </select>
                                                </div>


                                                <div class="row">
                                                    <div class="form-group col-md-6 date-picker">
                                                        <label for="">Form</label>
                                                        <input class="form-control date-input" />
                                                        <img src="./images/Icon/calender_icon.png" alt="" />
                                                    </div>
                                                    <div class="form-group col-md-6 date-picker">
                                                        <label for="">To</label>
                                                        <input class="form-control date-input" />
                                                        <img src="./images/Icon/calender_icon.png" alt="" />
                                                    </div>
                                                </div>
                                                <Link to='/hotel'>
                                                    <button type="submit" class="btn col-md-12 section-btn">Start Booking</button>
                                                </Link>
                                            </form>


                                        </div>
                                    </div>


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