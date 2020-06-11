import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="StuffCard row col-12 my-2">
        <h5>{item.itemName}</h5>
        <Link className="btn btn-outline-dark mx-1" to={editLink}>Edit</Link>
        <Link className="btn btn-outline-dark mx-1" to={singleLink}>Single</Link>
        <button className="btn btn-outline-dark mx-1" onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    );
  }
}

export default StuffCard;
