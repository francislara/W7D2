import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.createTodo = props.createTodo;

    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();

    const target = event.target;
    this.setState({[target.id]: target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.createTodo(this.state)
      .then(this.resetState());
  }

  resetState() {
    this.setState({
      title: '',
      body: '',
      done: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
        <label htmlFor="title">Title:</label>
          <input id="title" type="text" value={this.state.title}  />
        <label htmlFor="body">Body:</label>
          <textarea id="body" value={this.state.body}></textarea>

        <input type="submit" value="Create Todo!" />
      </form>
    );
  }
}

export default TodoForm;
