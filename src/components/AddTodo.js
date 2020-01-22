import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handlerOnChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handlerOnSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <h5 className="center blue-text">Add newtodo</h5>
        <form onSubmit={this.handlerOnSubmit}>
          <label>New todo</label>
          <input
            type="text"
            onChange={this.handlerOnChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
