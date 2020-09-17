import React, { useContext } from 'react';
import logo from '../../../images/Logo-2.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import './DarkHeader.css';


const DarkHeader = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <header className="header">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link to="/"> <img src={logo} alt="" /> </Link>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Search your Destination..." />
                        </form>
                        <div className="nav">
                            <p>Name iS: {loggedInUser.name} </p>
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

export default DarkHeader;