import React, { Component } from 'react';
import Todos from './components/Todos';
import ToDoForm from './components/ToDoForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todos: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClickAdd = (e) => {
    e.preventDefault();
    const { title, description, todos } = this.state;

    if (!title.trim()) {
      alert('Please enter at least the task name');
      return;
    }

    this.setState({
      todos: [...todos, { id: Date.now(), title, description, completed: false }],
      title: '',
      description: '',
    });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  render() {
    const { title, description, todos } = this.state;

    return (
      <div className='container d-grid col-12 text-center d-flex flex-column justify-content-start min-vh-100 p-3'>
        <ToDoForm
          title={title}
          description={description}
          handleChange={this.handleChange}
          handleClickAdd={this.handleClickAdd}
        />
        {todos.length > 0 && (
          <Todos todos={todos} markComplete={this.markComplete} />
        )}
      </div>
    );
  }
}
