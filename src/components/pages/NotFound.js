import React from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../layout/Dark Header/DarkHeader';

const NotFound = () => {
    return (
        <div>
            <div className="section-padding">
                <div className="container">
                    <DarkHeader></DarkHeader>
                </div>

                <section className="banner">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="jumbotron">
                                    <h1 className="display-4">404 Not Found!</h1>
                                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <div className="my-4">
                                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                        <p className="lead">
                                            <Link className="btn btn-primary btn-lg" to="/" role="button">Go to Home page</Link>
                                        </p>
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

export default NotFound;