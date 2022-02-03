import React from "react";
import { connect } from "react-redux";

import { createTodo } from "../actions";

import TodoForm from "./TodoForm";

class CreateTodo extends React.Component {
  onSubmit = (state) => {
    const { createTodo } = this.props;

    createTodo(state);
  };

  render() {
    return <TodoForm handleSubmission={this.onSubmit}></TodoForm>;
  }
}

export default connect(null, { createTodo })(CreateTodo);
