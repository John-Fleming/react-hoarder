import React from 'react';
// import firebase from 'firebase/app';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar></MyNavbar>
        <Auth></Auth>
      </div>
    );
  }
}

export default App;
