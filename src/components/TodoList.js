import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {







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
                completed: !item.completed
              };
            } else {
              return item;
            }
          })
        });
      };
    
    






  render() {
    return (
      <div className="shopping-list">
        {this.props.todo.map((item) => (
          <Todo item={item} />
        ))}
        <button className="clear-btn">Clear Task</button>
      </div>
    );
  }
}

export default TodoList;
