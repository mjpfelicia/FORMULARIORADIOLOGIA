import React from 'react';
import './CustomCheckbox.css'; // Import the CSS for styling

const CustomCheckbox = ({ id,className, label, checked, onChange, disabled = false }) => {
  return (
    <div className={`custom-checkbox${className ? ' ' + className : ''}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom"></span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;