import React from 'react';
import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    const uid = authData.getUid();
    stuffData.getStuffByUid(uid)
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => console.error('could not get stuff: ', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    const editLink = '/edit/12345';
    const singleLink = '/stuff/12345';
    return (
      <div className="MyStuff mx-auto">
        <h1 className="my-3">My Stuff</h1>
        <Link className="btn btn-outline-dark mx-1" to={editLink}>Edit</Link>
        <Link className="btn btn-outline-dark mx-1" to={singleLink}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
