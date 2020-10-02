import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { signOutHandler } from '../Auth/LoginManager';

const UserBar = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    //** Sign Out Handler */
    const authSignOutHandler = () => {
        signOutHandler()
            .then(res => {
                setLoggedInUser(res)
            })
    }

    return (
        <div className="user-info">
            <p>Account</p>
            <p>Profile</p>
            <p>Setting</p>
            <button onClick={authSignOutHandler} className="section-btn logout">Logout</button>
        </div>
    );
};

export default UserBar;