import React from 'react';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1 className="mt-3">My Stuff</h1>
        <button className="btn btn-outline-dark">Edit</button>
        <button className="btn btn-outline-dark">Single</button>
      </div>
    );
  }
}

export default MyStuff;
