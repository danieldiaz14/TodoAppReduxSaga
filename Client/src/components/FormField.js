import React from "react";

const FormField = ({ label, name, value, handleChange, placeHolder }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormField;
