import React from "react";

const Todo = (props) => {
  const { title, description, onDelete, onSelect } = props;
  return (
    <div className="item">
      <div className="right floated content">
        <button className="ui green button" onClick={onSelect}>
          Edit Todo
        </button>
        <button className="ui negative button" onClick={onDelete}>
          Delete
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
