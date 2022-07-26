import React from "react";

const BookmarkComponent = ({ sideNavshow }) => {
  const [show, setShow] = React.useState(true);

  // 用於手機版判斷頁籤列表是否出現
  const handleBookmarkShow = () => {
    setShow(!show);
  };
  return (
    <div
      className={`bookmark ${
        !sideNavshow && "bigBookmark"
      } ts-tab is-segmented ${!show && "showBookmark"}`}
    >
      <button className="ts-button">頁籤1</button>
      <span
        className="ts-icon is-angles-down-icon"
        onClick={() => {
          handleBookmarkShow();
        }}
      ></span>
      <button
        className={`ts-button`}
        onClick={() => {
          handleBookmarkShow();
          console.log("頁籤2");
        }}
      >
        頁籤2
      </button>
      <button className="ts-button">頁籤3</button>
      <button className="ts-button">頁籤4</button>
      <button className="ts-button">頁籤5</button>
      <button className="ts-button">頁籤6</button>
      <button className="ts-button">頁籤7</button>
      <button className="ts-button">頁籤8</button>
      <button className="ts-button">頁籤9</button>
    </div>
  );
};

export default BookmarkComponent;
