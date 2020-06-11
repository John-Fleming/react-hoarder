import React from 'react';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';
// import stuffData from '../../../helpers/data/stuffData';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  addItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };

    stuffData.createItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('could not create new item: ', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    return (
      <div className="NewStuff col-12">
        <h1 className="mt-3">New Stuff</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-dark mt-3" onClick={this.addItem}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
