import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
        <div>
            <h1>Your To Do List</h1>
            <UserInput />
        </div>
    );
  }
}

class UserInput extends Component{
  render(){
    return(
        //Allows the user to input their list
        <form>
            <div className="form-group">
              <label>New Item:</label>
              <input type="text" className="NewToDo"></input>
            </div>
        </form>
    )
  }
}
