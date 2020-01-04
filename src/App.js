import React, { Component } from 'react';
import Todos from './todos'
import NewTodos from './addTodos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Wash dishes"},
      {id: 2, content: "Read a novel"}
    ]
  }

  deleteTodos = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }

  addTodos = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo">
        <h1 className="center blue-text">My Todo's</h1>   
        <NewTodos addTodos={this.addTodos} />
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} addTodos={this.addTodos} />
      </div>
    );
  }
}

export default App;
