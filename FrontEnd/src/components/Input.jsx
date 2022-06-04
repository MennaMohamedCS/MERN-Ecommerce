import React from 'react';

const Input = ({ name, type, value, handleChange, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        required
        
      />
    </div>
  );
};
export default Input;
