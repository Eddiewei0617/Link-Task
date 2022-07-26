import React from "react";
import Button from "../Button";

const ButtonComponent = () => {
  return (
    <div className="ts-row articleButtons">
      <Button
        className="draft"
        buttonType={"儲存草稿"}
        pageType={"article"}
      ></Button>
      <Button
        className="publish"
        buttonType={"發表文章"}
        pageType={"article"}
      ></Button>
    </div>
  );
};

export default ButtonComponent;
