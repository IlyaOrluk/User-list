import React, { Component } from 'react';
import Spinner from './Spinner';
// import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
        console.log(itemList)
      });
  }

  

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      const {itemClass, findUser} = this.props;

      return (
        <div className={itemClass}
            key={id}
            id={id}
            onClick={findUser}>
          {label}
        </div>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div className="item-list">
        {items}
      </div>
    );
  }
}