import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import loginBg from '../../../images/Login/loginBg.jpg';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const {user,admin} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser]=user;
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                setLoggedInUser(signedInUser);
                storeAuthToken();
            }).catch((error) => {
                console.log(error);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div className="login-page container">
            <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 d-none d-md-block ">
                    <img className="img-fluid" src={loginBg} alt="" />
                </div>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-dark" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;