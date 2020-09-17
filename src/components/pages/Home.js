import React from 'react';
import DarkHeader from '../layout/Dark Header/DarkHeader';
// import travelData from '../../travelData';
import SinglePlace from '../templateParts/SinglePlace';
// import Slider from './Slider';


const Home = () => {
    // const [travels, setTravels] = useState(travelData)
    // const header = travels.map(travel => travel.name)

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