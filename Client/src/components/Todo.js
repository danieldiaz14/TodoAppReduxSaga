import React from "react";

const Todo = (props) => {
  const { title, description, onDelete, onSelect } = props;
  return (
    <div className="item">
      <div className="right floated content">
        <button className="ui right labeled icon button inverted green" onClick={onSelect}>
          Edit Todo
          <i className="icon edit"/>
        </button>
        <button
          className="ui right labeled icon button inverted red"
          onClick={onDelete}
        >
          Delete
          <i className="icon trash" />
        </button>
      </div>
      <div className="content">
        <div className="header">{title}</div>
        {description}
      </div>
    </div>
  );
};

export default Todo;
