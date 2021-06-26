import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={`item${this.props.item.completed ? " purchased" : ""}`}
      >
        {this.props.item.task}
      </div>
    );
  }
}

export default Todo;
