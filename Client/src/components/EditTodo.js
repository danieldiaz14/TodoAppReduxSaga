import React from "react";

import { getTodos, updateTodo } from "../actions";
import { connect } from "react-redux";

import TodoForm from "./TodoForm";

class EditTodo extends React.Component {

  onSubmit = (state) => {
    const { updateTodo } = this.props;
    updateTodo(state);
  };

  onBack = (e) => {
    e.preventDefault();
    this.props.getTodos();
  };

  render() {
    const { description, id, title } = this.props.selectedTodo;

    return (
      <TodoForm
        title={title}
        description={description}
        id={id}
        handleSubmission={this.onSubmit}
      >
        <button onClick={this.onBack} className="ui button inverted red">
          Back
        </button>
      </TodoForm>
    );
  }
}

export default connect(null, { getTodos, updateTodo })(EditTodo);
