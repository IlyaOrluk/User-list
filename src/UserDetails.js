import React from 'react';
import ItemDetails, {Detail} from './ItemDetails';



export default class UserDetails extends React.Component {
    


    render() {
      return (
          <React.Fragment>
              <h3>User dateils:</h3>
              <input type="text" placeholder='type new firstname' name="newFirstName" onInput={this.props.handleChange} />
              <button onClick={this.props.changeUserName}>Change firstName</button>
            <ItemDetails itemClass={'user-dateils'} itemId={this.props.itemId} getData={this.props.getData}>
                <Detail field='firstName' label='firstName: '/>
                <Detail field='lastName' label='lastName: '/>
                <Detail field='age' label='full Age: '/>
                <Detail field='email' label='mail: '/>
            </ItemDetails>
            
          </React.Fragment>

      );
    }
  }
