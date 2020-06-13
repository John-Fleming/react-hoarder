import React from 'react';
import { Link } from 'react-router-dom';
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

  deleteItem = () => {
    const { itemId } = this.props.match.params;
    stuffData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('could not delete item: ', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editLink = `/edit/${itemId}`;
    return (
      <div className="SingleStuff card mt-3 col-4 mx-auto">
        <img className="card-img-top" src={item.itemImage} alt="my item"/>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          <button className="btn btn-outline-dark mx-1" onClick={this.deleteItem}>Delete</button>
          <Link className="btn btn-outline-dark mx-1" to={editLink}>Edit</Link>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
