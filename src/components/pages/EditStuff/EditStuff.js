import React from 'react';
import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';

class EditStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleItem(itemId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('could not get single item: ', err));
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

  editItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };

    stuffData.updateItem(itemId, updatedItem)
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
      <div className="EditStuff col-12">
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
          <button type="submit" className="btn btn-outline-dark mt-3" onClick={this.editItem}>Update Item</button>
        </form>
      </div>
    );
  }
}

export default EditStuff;
