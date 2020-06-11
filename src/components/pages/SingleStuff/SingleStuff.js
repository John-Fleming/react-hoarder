import React from 'react';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  getItem = () => {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('could not get single item: ', err));
  }

  componentDidMount() {
    this.getItem();
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff card mt-3 col-4 mx-auto">
        <img className="card-img-top" src={item.itemImage} alt="my item"/>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
