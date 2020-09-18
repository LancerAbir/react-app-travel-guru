import React from 'react';
import DarkHeader from '../layout/Dark Header/DarkHeader';
import SinglePlace from '../templateParts/SinglePlace';


const Home = () => {

    return (
        <div>
            <div className="section-padding">
                <div className="container">
                    <DarkHeader></DarkHeader>
                </div>

                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between">
                                    <SinglePlace></SinglePlace>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Home;