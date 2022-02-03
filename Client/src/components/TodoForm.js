import React from "react";
import FormField from "./FormField";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    let title = props.title ?? "";
    let description = props.description ?? "";
    const id = props.id ?? 0;
    this.state = {
      title,
      description,
      id,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trimStart(),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { handleSubmission } = this.props;
    const { description, title, id } = this.state;

    const isFormIncomplete = description.length < 1 || title.length < 1;

    if (!isFormIncomplete) {
      handleSubmission(this.state);
      this.setState({
        title: "",
        description: "",
        id: null,
      });
    }
  };

  renderSubmit = () => {
    const { description, title } = this.state;

    const isFormComplete = description.length > 0 && title.length > 0;

    if (isFormComplete) {
      return (
        <button
          onClick={this.onSubmit}
          type="submit"
          className="ui button inverted primary"
        >
          Submit
        </button>
      );
    }
    return "";
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="ui inverted form">
        <FormField
          label="Title"
          name="title"
          value={this.state.title}
          handleChange={this.onChange}
          placeHolder="Todo Title"
        />
        <FormField
          label="Description"
          name="description"
          value={this.state.description}
          handleChange={this.onChange}
          placeHolder="Todo Description"
        />
        {this.renderSubmit()}
        {this.props.children}
      </form>
    );
  }
}

export default TodoForm;
