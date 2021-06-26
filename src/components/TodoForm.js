import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChnage = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
   
    event.preventDefault()
    this.props.addTask(event,this.state.value);
  };
  render() {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="Add your tasks here!"
          type="text"
          value={this.state.value}
          onChange={this.handleChnage}
        />
        <button>Add Task</button>
      </form>
    );
  }
}
export default TodoForm;
