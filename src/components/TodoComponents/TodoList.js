import React from 'react';
import Todo from "./Todo";
class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
          {this.props.todoData.map((item) => {
              return <Todo task={item} setCompleted={this.props.setCompleted}/>
          })}
      </div>
    );
  }
}

export default App;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js