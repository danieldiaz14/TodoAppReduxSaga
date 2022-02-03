import React from "react";

import { connect } from "react-redux";
import { getTodos, deleteTodo, selectTodo, selectTodoList } from "../actions";

import EditTodo from "./EditTodo";
import Todo from "./Todo";
class TodosList extends React.Component {
  state = {
    selectedTodo: {},
    listToDisplay: [],
  };

  componentDidMount = () => {
    this.props.getTodos();
  };

  handleSelectTodo = (todo) => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ selectedTodo: todo }));
    }).then(() => {
      this.props.selectTodo();
    });
  };

  renderButtons = () => {
    const isEditing = this.props.todos.editTodo;
    const isTodosEmpty = this.props.todos.todosList.length < 1;
    const toolTip = isTodosEmpty ? "" : "This will sort the todos by their";
    if (isEditing) {
      return "";
    }

    if (isTodosEmpty) return "";

    return (
      <div className="ui inverted menu">
        <div
          onClick={() => this.props.selectTodoList("title")}
          className="ui button inverted standard"
          data-tooltip={`${toolTip} title`}
        >
          Sort By Title.
        </div>
        <div
          onClick={() => this.props.selectTodoList("description")}
          className="ui icon button inverted teal"
          data-tooltip={`${toolTip} description`}
        >
          Sort By Description
        </div>
      </div>
    );
  };

  renderList = () => {
    const { todosList } = this.props.todos;
    const list = todosList.map((todo) => {
      return (
        <Todo
          title={todo.title}
          description={todo.description}
          key={todo.id}
          onSelect={() => this.handleSelectTodo(todo)}
          onDelete={() => this.props.deleteTodo(todo.id)}
        />
      );
    });
    return <div className="ui inverted relaxed divided list">{list}</div>;
  };

  checkListSize = () => {
    const { todosList } = this.props.todos;
    const isTodosEmpty = todosList.length < 1;

    if (!isTodosEmpty) {
      return this.renderList();
    } else {
      return (
        <div className="container">
          <h1 className="header">Create Some Todos!</h1>
        </div>
      );
    }
  };

  renderListOrSelectTodo = () => {
    const { editTodo } = this.props.todos;
    if (!editTodo) {
      return this.checkListSize();
    } else {
      return <EditTodo selectedTodo={this.state.selectedTodo} />;
    }
  };

  render() {
    return (
      <div className="ui inverted segment">
        {this.renderButtons()}
        <div className="ui container">{this.renderListOrSelectTodo()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  getTodos,
  deleteTodo,
  selectTodo,
  selectTodoList,
})(TodosList);
