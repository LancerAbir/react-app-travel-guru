import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/Logo-1.png';
import './LightHeader.css';



const LightHeader = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
        <header class="header">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-between">
                        <div class="logo">
                            <Link to="/"> <img src={logo} alt="" /> </Link>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Search your Destination..." />
                        </form>
                        <div class="nav">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                    <Link to="/destination">Destination</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/contact">Contact</Link>
                                    {
                                        loggedInUser.name ? <h6 style={{ fontWeight: "700" }}>{loggedInUser.name}</h6> : <Link to="/login">
                                            <button className="section-btn">Login</button>
                                        </Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LightHeader;