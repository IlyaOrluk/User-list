import React from 'react';
import GetUsers from './GetUsers';
import AddUser from './AddUser';
import UserDetails from './UserDetails';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    userId: 1,
    newFirstName: null,
    displayFirst: true,
    displaySecond: false
  }
  findUser = (e) =>{
    if(e.target.classList.contains('user')){
      this.setState({
        userId: e.target.id
      })
    } else {
      this.setState({
        userId: e.target.parentNode.id
      })
    }
    console.log(e.target.id)
    this.changeDisplays();
  }
  getUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${this.state.userId}`)
       return res.data;
   }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
    console.log(this.state)
  };

  changeUserName = () => {
    axios.patch(`http://localhost:3000/users/${this.state.userId}`, {
      firstName: this.state.newFirstName,
  })
  .then((response) => {
    console.log(response);
  });
  }

  changeDisplays = () =>{
    this.setState({
      displayFirst: !this.state.displayFirst,
      displaySecond: !this.state.displaySecond
    })
  }
  render(){
    console.log(this.state)
    const firstDisplay = this.state.displayFirst ? <GetUsers findUser={this.findUser}/> : null;
    const secondDisplay = this.state.displaySecond ? <UserDetails itemId={this.state.userId}
                                                          handleChange={this.handle_change}
                                                          changeUserName={this.changeUserName}
                                                          getData={this.getUser}/>: null;
    return (
      <div className='container'>
        <div className='display'>
          <button onClick={this.changeDisplays}>1</button>
          <button onClick={this.changeDisplays}>2</button>
        </div>
            <AddUser/>
            {firstDisplay}
            {secondDisplay}
        </div>
    );
  }
}


