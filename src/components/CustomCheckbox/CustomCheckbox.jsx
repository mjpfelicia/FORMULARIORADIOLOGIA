import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ id, className, label, checked, onChange, disabled = false }) => {
  return (
    <div className={`custom-checkbox${className ? ' ' + className : ''}`}>
      <label className="checkbox-label" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;