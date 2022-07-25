import React from "react";

// pageType: article、

const Button = ({ buttonType, className, pageType }) => {
  return (
    <div>
      <button className={`ts-button ${className}`}>{buttonType}</button>
    </div>
  );
};

export default Button;
