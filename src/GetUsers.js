import React from 'react';
import axios from 'axios';
import ItemList from './ItemList';
 
export default class GetUsers extends React.Component {
  getAllUsers = async () => {
   const res = await axios.get(`http://localhost:3000/users`)
   console.log(res.data)
      return res.data;
  }
  componentDidMount() {
    this.getAllUsers();
  }
  componentDidUpdate(){
    this.getAllUsers();
  }
 

  render() {
    return (
      <React.Fragment>
        <p>click on any user to view user dateils:</p>
    <ItemList getData={this.getAllUsers} findUser={this.props.findUser} itemClass={'user'}>
      {(i) => (
        <React.Fragment>
          <span>{i.firstName}</span>/
          <span>{i.lastName}</span>/
          <span>{i.age}</span>
        </React.Fragment>
      )}
    </ItemList>
      </React.Fragment>
    );
  }
}