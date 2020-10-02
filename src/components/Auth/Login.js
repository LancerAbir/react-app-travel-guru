import React, { useContext, useState } from 'react';
import LightHeader from '../layout/Light Header/LightHeader';
import fbIcon from '../../images/Icon/fb.png'
import googleIcon from '../../images/Icon/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

//** react notification */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { facebookSignInHandler, googleSignINHandler } from './LoginManager';

firebase.initializeApp(firebaseConfig);


const Login = () => {

    //** Data Come Form Context API */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    //** useHistory & useLocation for state location */
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //** useState Hook */
    const [newUser, setNewUser] = useState(false)

    //** useState Hook */
    const [user, setUser] = useState({
        isSignedIn: false,
        fastName: '',
        lastName: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        successful: false
    })


    //** Facebook Sing In Handler */
    // const facebookSingIn = () => {
    //     facebookSignInHandler()
    //         .then(res => {
    //             setUser(res, true)
    //             setLoggedInUser(res, true)
    //             history.replace(from)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             console.log(error.message)
    //             setUser(error.message)
    //         })
    // }



    const facebookSingIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider)
            .then(res => {
                console.log(res.user);
                const { displayName, email } = res.user
                const signedInUserFb = {
                    isSignedIn: true,
                    fastName: displayName,
                    email: email,
                }
                setUser(signedInUserFb)
                setLoggedInUser(signedInUserFb)
                history.replace(from)
            })
            .catch(error => {
                console.log(error)
                console.log(error.message)
                setUser(error.message)
            })
    }


    //** Google SignIN Handler */
    const googleSignIn = () => {
        googleSignINHandler()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
                history.replace(from)
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
                setUser(error.message)
            });
    }

    // const googleSignINHandler = () => {
    //     const googleProvider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(googleProvider)
    //         .then(res => {
    //             const { displayName, photoURL, email } = res.user
    //             const signedInUser = {
    //                 isSignedIn: true,
    //                 fastName: displayName,
    //                 email: email,
    //                 photo: photoURL
    //             }
    //             setUser(signedInUser)
    //             setLoggedInUser(signedInUser)
    //             history.replace(from)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.message);
    //             setUser(error.message)
    //         });
    // }




    //** Google Sign Out Handler */
    // const signOutHandler = () => {
    //     firebase.auth().signOut()
    //         .then(res => {
    //             const signedOutUser = {
    //                 isSignedIn: false,
    //                 fastName: '',
    //                 lastName: '',
    //                 email: '',
    //                 password: '',
    //                 photo: ''
    //             }
    //             setUser(signedOutUser)
    //             setLoggedInUser(signedOutUser)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.message);
    //         });
    // }



    //** Registration Form Submit Handler */
    const registerSubmitHandler = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newSetUser = { ...user }
                    newSetUser.error = ''
                    newSetUser.successful = true
                    setUser(newSetUser)
                    setLoggedInUser(newSetUser)
                    updateUserInfo(user.fastName)
                    history.replace(from)
                })
                .catch(error => {
                    const newSetUserInfo = { ...user }
                    newSetUserInfo.error = error.message;
                    newSetUserInfo.successful = false
                    setUser(newSetUserInfo)

                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const { displayName } = res.user
                    const newSetUser = { ...user }
                    newSetUser.error = ''
                    newSetUser.successful = true
                    newSetUser.fastName = displayName
                    setUser(newSetUser)
                    setLoggedInUser(newSetUser)
                    history.replace(from)
                    console.log('sign in user info', res.user);
                })
                .catch(error => {
                    const newSetUserInfo = { ...user }
                    newSetUserInfo.error = error.message;
                    newSetUserInfo.successful = false
                    setUser(newSetUserInfo)
                    setLoggedInUser(newSetUserInfo)
                });
        }
        e.preventDefault()
    }



    //** Registration OnBlur Handler */
    const blurHandler = (e) => {
        let isFieldValid = true
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length > 8 && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value)
        }
        if (isFieldValid) {
            const newSetUser = { ...user }
            newSetUser[e.target.name] = e.target.value
            setUser(newSetUser)
        }
    }



    //** Update User Name */
    const updateUserInfo = fastName => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: fastName
        })
            .then(res => {
                console.log('User Info Update Successfully');
            })
            .catch(error => {
                console.log(error)
                console.log(error.message)
            })
    }


    //** React Notification */
    const notify = () => toast(
        <div className='pass-noti'>
            <ul>
                <li> Password Must be Used [8 caracteres ] </li>
                <li> Must be Used key symbol [!@#$%^&*] </li>
                <li> Use Capital Letter [A-Z] </li>
                <li> Use Small Letter [a-z] </li>
                <li> Use Number [1-9] </li>
            </ul>
        </div>);




    return (
        <div>
            <div className="container">
                <LightHeader></LightHeader>
            </div>

            <section className="section-auth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="auth-box">
                                {
                                    newUser ? <h4>Create an account</h4> : <h4>Login</h4>
                                }
                                {
                                    user.successful ?
                                        <p style={{ color: 'green' }}>User Successfully {newUser ? 'Created' : 'Logged In'} </p>
                                        :
                                        <p style={{ color: 'red' }}> {user.error}</p>
                                }

                                <form action="" onSubmit={registerSubmitHandler}>
                                    <div className="form-group">
                                        {
                                            newUser && <input type="name" name="fastName" onBlur={blurHandler} className="form-control" placeholder="Fast Name" required />
                                        }
                                    </div>
                                    <div className="form-group">
                                        {
                                            newUser && <input type="name" name="lastName" onBlur={blurHandler} className="form-control" placeholder="Last Name" required />
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" onBlur={blurHandler} className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Username or Email" required />
                                    </div>
                                    <div className="form-group">
                                        {
                                            newUser ?
                                                <input type="password" onClick={notify} name="password" onBlur={blurHandler} className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" required />
                                                :
                                                <input type="password" name="password" onBlur={blurHandler} className="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" required />
                                        }
                                        <ToastContainer />
                                    </div>

                                    {
                                        newUser ? <div className="form-row remember-forget">
                                            <div className="form-group col-md-6">
                                                <div className="form-check">

                                                </div>
                                            </div>
                                            <div className="form-group col-md-6 text-right">

                                            </div>
                                        </div> :
                                            <div className="form-row remember-forget">
                                                <div className="form-group col-md-6">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-6 text-right">
                                                    <p>Forgot Password</p>
                                                </div>
                                            </div>
                                    }


                                    <input type="submit" className="btn col-md-12" value={newUser ? 'Create an Account' : 'Login'} />

                                    <p className="auth-bottom text-center"> Don’t have an account?
                                    <span onClick={() => setNewUser(!newUser)} name="newUser">
                                            {
                                                newUser ? ' login' : ' Create an account'
                                            }
                                        </span>
                                    </p>
                                </form>
                            </div>

                            <div className="social-auth text-center">
                                <div className="or">
                                    Or
                            </div>

                                <button onClick={facebookSingIn} className="social-auth-btn">
                                    <img className="text-left" src={fbIcon} alt="" />
                                                Continue with Facebook
                                </button>


                                {
                                    user.isSignedIn ?
                                        <button className="social-auth-btn">
                                            <img src={googleIcon} alt="" />
                                                    Sign Out with Facebook
                                    </button> :
                                        <button onClick={googleSignIn} className="social-auth-btn">
                                            <img src={googleIcon} alt="" />
                                                Continue with Facebook
                                    </button>
                                }
                                {
                                    user.isSignedIn && <p>Welcome {user.name} </p>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Login;