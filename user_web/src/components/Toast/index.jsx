import React from "react";

const Toast = ({ count, message }) => {
  return (
    <div
      className={`toast toast-end translate-all duration-75 ${
        !count && "translate-x-full"
      }`}
    >
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
