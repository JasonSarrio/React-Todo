import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  

  constructor() {
    super();
    this.state = {
      todoData:
        [],
      idCounter: 0
    };

    this.newTodo = this.newTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
  }

  newTodo(newTodoData) {
      //set state to a new array containing the old list data, plus our new todo (concat doesn't mutate original, and returns the new array. works nicely for this)
    
    this.setState({todoData: this.state.todoData.concat({
      task: newTodoData,
      id: this.state.idCounter,
      completed: false
    })});
    this.setState({ idCounter: this.state.idCounter + 1 })
    console.log(this.state);
  }

  clearCompleted() {
    this.setState({todoData: this.state.todoData.filter(item => {return !item.completed} )});
  }

  setCompleted(task) {

    console.log("taskName", task);

    let indexToChange;

    this.state.todoData.forEach((item, index) => {
      console.log("looping", index);
      if(item.id === task.id){
        indexToChange = index;
      }
    });

    console.log("indexToChange", indexToChange);

    let newTodoData = this.state.todoData.slice();

    console.log("this.state.todoData undefined? ", this.state.todoData)
    console.log("newTodoData undefiuned? ", newTodoData);

    newTodoData[indexToChange].completed = true;

    this.setState({todoData: newTodoData});

  }

  return (
    <div className="App">
      <h1> Jason's Todo List <h1/>
      <TodoForm newTodo={newTodo} clearCompleted={clearCompleted}/>
      <TodoList todoData={state} setCompleted={setCompleted}/>
    </div>
  );
}

export default App;