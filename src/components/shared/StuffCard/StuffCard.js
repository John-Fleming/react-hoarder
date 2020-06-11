import React from 'react';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;

    return (
      <div className="StuffCard row col-12 my-2">
        <h5>{item.itemName}</h5>
        <Link className="btn btn-outline-dark mx-1" to={editLink}>Edit</Link>
        <Link className="btn btn-outline-dark mx-1" to={singleLink}>Single</Link>
      </div>
    );
  }
}

export default StuffCard;
