import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';


class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h2>Auth</h2>
        <button className="btn btn-outline-dark" onClick={this.loginClickEvent}>Google Login</button>
      </div>
    );
  }
}

export default Auth;
