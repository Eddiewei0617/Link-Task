import Link from "next/link";
import React from "react";

const BookmarkComponent = () => {
  const [show, setShow] = React.useState(true);
  const handleBookmarkShow = () => {
    setShow(!show);
  };
  return (
    <div className={`bookmark ts-tab is-segmented ${!show && "showBookmark"}`}>
      <button className="ts-button">頁籤1</button>
      <span
        className="ts-icon is-angles-down-icon"
        onClick={() => {
          handleBookmarkShow();
        }}
      ></span>
      <button
        className={`ts-button `}
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
