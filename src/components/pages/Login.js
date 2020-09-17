import React, { useContext, useState } from 'react';
import LightHeader from '../layout/Light Header/LightHeader';
import fbIcon from '../../images/Icon/fb.png'
import googleIcon from '../../images/Icon/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

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
        photo: '',
        error: '',
        successful: false
    })

    //** Google SignIN Handler */
    const googleSignINHandler = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                console.log(res);
                const { displayName, photoURL, email } = res.user
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from)
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            });
    }

    //** Google Sign Out Handler */
    const googleSignOutHandler = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    password: '',
                    photo: ''
                }
                setUser(signedOutUser)
                setLoggedInUser(signedOutUser)
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            });
    }



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
                    history.replace(from)
                    // updateUserInfo(user.fastName)
                })
                .catch(error => {
                    const newSetUser = { ...user }
                    newSetUser.error = error.message;
                    newSetUser.successful = false
                    setUser(newSetUser)
                    setLoggedInUser(newSetUser)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newSetUser = { ...user }
                    newSetUser.error = ''
                    newSetUser.successful = true
                    setUser(newSetUser)
                    setLoggedInUser(newSetUser)
                    history.replace(from)
                    console.log('sign in user info', res.user);
                })
                .catch(error => {
                    const newSetUser = { ...user }
                    newSetUser.error = error.message;
                    newSetUser.successful = false
                    setUser(newSetUser)
                    setLoggedInUser(newSetUser)
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
            setLoggedInUser(newSetUser)
        }
    }



    //** Update User Name */
    // const updateUserInfo = fastName => {
    //     const user = firebase.auth().currentUser;

    //     user.updateProfile({
    //         displayName: fastName
    //     })
    //         .then(res => {
    //             console.log('User Info Update Successfully');
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             console.log(error.message)
    //         })
    // }

    return (
        <div>
            <div className="container">
                <LightHeader></LightHeader>
            </div>

            <section class="section-auth">
                <div class="row">
                    <div class="col-md-6 offset-3">
                        <div class="auth-box">
                            {
                                newUser ? <h4>Create an account</h4> : <h4>Login</h4>
                            }
                            <p>{user.email}</p>
                            <p>{user.password}</p>
                            <p>{user.fastName}</p>
                            <p>{user.lastName}</p>

                            <form action="" onSubmit={registerSubmitHandler}>
                                <div class="form-group">
                                    {
                                        newUser && <input type="name" name="fastName" onBlur={blurHandler} class="form-control" placeholder="Fast Name" required />
                                    }
                                </div>
                                <div class="form-group">
                                    {
                                        newUser && <input type="name" name="lastName" onBlur={blurHandler} class="form-control" placeholder="Last Name" required />
                                    }
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" onBlur={blurHandler} class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Username or Email" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" onBlur={blurHandler} class="form-control" id="exampleInputPassword1"
                                        placeholder="Password" required />
                                </div>

                                {
                                    newUser ? <div class="form-row remember-forget">
                                        <div class="form-group col-md-6">
                                            <div class="form-check">

                                            </div>
                                        </div>
                                        <div class="form-group col-md-6 text-right">

                                        </div>
                                    </div> :
                                        <div class="form-row remember-forget">
                                            <div class="form-group col-md-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6 text-right">
                                                <p>Forgot Password</p>
                                            </div>
                                        </div>
                                }


                                <input type="submit" class="btn col-md-12" value={newUser ? 'Create an Account' : 'Login'} />

                                <p class="auth-bottom text-center"> Don’t have an account?
                                    <span onClick={() => setNewUser(!newUser)} name="newUser">
                                        {
                                            newUser ? 'login' : 'Create an account'
                                        }
                                    </span>
                                </p>
                            </form>
                        </div>

                        <div class="social-auth text-center">
                            <div class="or">
                                Or
                            </div>

                            <button class="social-auth-btn">
                                <img class="text-left" src={fbIcon} alt="" />
                                                Continue with Facebook
                            </button>


                            {
                                user.isSignedIn ?
                                    <button onClick={googleSignOutHandler} class="social-auth-btn">
                                        <img src={googleIcon} alt="" />
                                                    Sign Out with Facebook
                                    </button> :
                                    <button onClick={googleSignINHandler} class="social-auth-btn">
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
            </section>
        </div>

    );
};

export default Login;