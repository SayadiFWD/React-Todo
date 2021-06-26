import React from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import data from "./data";
import "./styles.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data,
    };
  }

  toggleItem = (event, itemId) => {
    event.preventDefault();

    this.setState({
      // loop over each item in array and alter it
      // if it matches the passed itemId
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            // merge existing item with new values below
            ...item,
            // "toggle" the boolean value or set it to
            // opposite what it currently is
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearTask = (event) => {
    event.preventDefault();

    this.setState({
      // filter out alltodos that are completed
      todos: this.state.todos.filter((item) => {
        // this is the same as:
        // item.competed === false
        return !item.completed;
      }),
    });
  };

  addTask = (event, taskName) => {
    const newTask = {
      id: Date.now(),
      task: taskName,
      ompleted: false,
    };
    this.setState({
      todos: [newTask, ...this.state.todos],
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2> Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <div className="shopping-list">
          {this.state.todos.map((item) => (
            <Todo item={item} onClick={(e) => this.toggleItem(e, item.id)} />
          ))}
          <button className="clear-btn" onClick={this.clearTask}>
            Clear Task
          </button>
        </div>
      </div>
    );
  }
}

export default App;
