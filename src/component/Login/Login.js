import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import google from '../../images/google (1).png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    // Google Authentication
    var provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // User login by google authentication
    const handleGoogleLogIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(displayName, email, photoURL);
            }).catch(e => {
                console.log(e.message);
            });
    }


    return (
        <div className="container text-center p-5">
            <p className="text-success display-6">
                Signin with Google
            </p>
            <button className="btn btn-outline-primary mt-3 p-3" onClick={handleGoogleLogIn}>
                <img src={google} alt="" width="35" height="35" /> Continue with Google
            </button>
        </div>
    );
};

export default Login;