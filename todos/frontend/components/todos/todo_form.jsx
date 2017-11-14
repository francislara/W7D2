import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.receiveTodo = props.receiveTodo;

    this.state = {
      id: uniqueId(),
      title: '',
      body: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();

    const target = event.target;
    this.setState({[target.id]: target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const action = this.receiveTodo({ id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      done: false
    });

    this.resetState();

    return action;
  }

  resetState() {
    this.setState({
      id: uniqueId(),
      title: '',
      body: ''
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
