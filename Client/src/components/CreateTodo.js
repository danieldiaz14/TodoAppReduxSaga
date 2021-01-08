import React from "react";
import { connect } from "react-redux";

import { createTodo } from "../actions";

class CreateTodo extends React.Component {
  state = {
    title: "",
    description: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    if (title.length >= 1 && description.length >= 1) {
      this.props.createTodo({
        title: this.state.title,
        description: this.state.description,
      });
      this.setState({
        title: "",
        description: "",
      });
    }
  };

  render() {
    return (
      <form className="ui inverted form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Todo Title</label>
          <input
            autoComplete="off"
            type="text"
            name="title"
            placeholder="Todo Title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="field">
          <label>Todo Description</label>
          <input
            autoComplete="off"
            type="text"
            name="description"
            placeholder="Todo Description"
            value={this.state.description}
            onChange={this.onChange}
          />
        </div>
        <button
          className="ui primary button"
          type="submit"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { createTodo })(CreateTodo);
