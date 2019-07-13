import React from 'react';
import axios from 'axios';
 
export default class AddUser extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    age: null
  }
  handleChange = e => {
    const targetName = e.target.name;
    this.setState({ 
      firstName: e.target.value
    });
    console.log(targetName)
    console.log(this.state)
  }
 
  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
    console.log(name)
    console.log(this.state)
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:3000/users`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      age: this.state.age
      })
      .then(res => {
        console.log(res);
      })
  }
 
  render() {
    return (
      <div>
        <h3>Add user this :)</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
          firstName:
            <input type="text" name="firstName" onChange={this.handle_change} />
          </label>
          <label>
          lastName:
            <input type="text" name="lastName" onChange={this.handle_change} />
          </label>
          <label>
          mail:
            <input type="mail" name="email" onChange={this.handle_change} />
          </label>
          <label>
          age:
            <input type="number" name="age" onChange={this.handle_change} />
          </label>
          <button type="submit">Add user</button>
        </form>
      </div>
    )
  }
}