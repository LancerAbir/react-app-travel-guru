import React, { useContext, useState } from 'react';
import logo from '../../../images/Logo-2.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import './DarkHeader.css';
import UserBar from '../../templateParts/UserBar';


const DarkHeader = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    //** OnMouse Over Toggle Hide and Visible */
    const [visibility, setVisibility] = useState(false)
    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    return (
        <header className="dark-header">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link to="/"> <img src={logo} alt="" /> </Link>
                        </div>
                        <form className="dark-input" action="">
                            <input type="text" placeholder="Search your Destination..." />
                        </form>
                        <div className="dark-nav">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                    <Link to="/destination">Destination</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/contact">Contact</Link>
                                    {
                                        loggedInUser.email ?
                                            <h6 onMouseOver={toggleVisibility} className="over-effect" style={{ fontWeight: "700" }}>{loggedInUser.fastName}</h6>
                                            :
                                            <Link to="/login">
                                                <button className="section-btn">Login</button>
                                            </Link>
                                    }
                                    {
                                        visibility && <UserBar></UserBar>
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