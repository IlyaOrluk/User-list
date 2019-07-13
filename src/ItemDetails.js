import React, { Component } from 'react';
import Spinner from './Spinner';
// import './item-list.css';

const Detail = ({ itemDetails, field, label }) => {
  return (
    <div className="preview-info">
      <span className="term">{label}</span>
      <span>{ itemDetails[field] }</span>
    </div>
  );
};

export {
  Detail
};

export default class ItemDetails extends Component {

  state = {
    itemDetails: null
  };

  updateUserDateils = () =>{
    const { getData, itemId } = this.props;
    console.log(getData)
    getData(itemId)
      .then((itemDetails) => {
        this.setState({
          itemDetails
        });
      });
  }
  componentDidMount() {
    this.updateUserDateils();
  }

  componentDidUpdate(prevProps){
    if(this.props.itemId !== prevProps.itemId){
      this.updateUserDateils();
    }
  }

  // const { getData, itemId } = this.props; //need from top func
  // getData(itemId)
  //   .then((itemDetails) => {
  //     this.setState({
  //       itemDetails
  //     });
  //   });


  render() {
    console.log(this.props)
    const { itemDetails } = this.state;

    if (!itemDetails) {
      return <Spinner />;
    }

    const {itemClass} = this.props;
    return (
      <div className={itemClass}>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { itemDetails });
          })
        }
      </div>
    );
  }
}



