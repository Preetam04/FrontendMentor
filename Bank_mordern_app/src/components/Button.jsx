import React from "react";

const Button = ({ style }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-18 rounded-[10px] text-primary outline-none ${style}`}
  >
    Get Started
  </button>
);

export default Button;
