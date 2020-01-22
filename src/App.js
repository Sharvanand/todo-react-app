import React, { Component } from "react";
import Todos from "./components/todos";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy groceries" },
      { id: 2, content: "Go to the gym" },
      { id: 3, content: "Cook the dinner" }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
