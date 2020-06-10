import React from 'react';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  render() {
    const editLink = '/edit/12345';
    const singleLink = '/stuff/12345';
    return (
      <div className="MyStuff">
        <h1 className="mt-3">My Stuff</h1>
        <Link className="btn btn-outline-dark mx-1" to={editLink}>Edit</Link>
        <Link className="btn btn-outline-dark mx-1" to={singleLink}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
