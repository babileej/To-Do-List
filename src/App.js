import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
        <div>
            <h2>To Do List</h2>
            <UserInput />
            <List />
        </div>
    );
  }
}

class UserInput extends Component{
    render(){
        return(
            //Allows the user to input their list
            <form action="">
             <div className="form-group">
               <label>Please enter an item on your list: </label>
               <br><input type="text" className="NewToDo"></input></br>
             </div>
            </form>
        )
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props};
    }
    render(){
        return(
            <ToDoItem></ToDoItem>
        );
    }
}

class ToDoItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="checkbox">
                <label><input type="checkbox" value="">{this.props.children}</input></label>
            </div>
        );
    }
}