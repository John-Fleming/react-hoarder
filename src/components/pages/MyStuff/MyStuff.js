import React from 'react';

import StuffCard from '../../shared/StuffCard/StuffCard';
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
    const { stuff } = this.state;

    const buildStuff = stuff.map((item) => <StuffCard key={item.id} item={item} />);

    return (
      <div className="MyStuff">
        <h1 className="my-3 mx-auto">My Stuff</h1>
        <div className="d-flex flex-wrap">
          {buildStuff}
        </div>
      </div>
    );
  }
}

export default MyStuff;
