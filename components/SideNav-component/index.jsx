import React from "react";

const SideNavComponent = () => {
  const [show, setShow] = React.useState(true);
  const handleSideNavShow = () => {
    setShow(!show);
  };

  return (
    <div className={`ts-content sideBar ${!show && "hideNav"}`}>
      <span
        className={`ts-icon is-angles-left-icon `}
        onClick={() => {
          handleSideNavShow();
        }}
      ></span>
      <span className="ts-icon is-bars-icon"></span>
      <div className="sideBarText">
        <div className="">側欄主題一</div>
        <div className="item">
          <span className="ts-icon is-compass-icon"></span> 探索
        </div>
        <div className="item">
          <span className="ts-icon is-film-icon"></span> 訂閱項目
        </div>
        <div className="">側欄主題二</div>
        <div className="item">
          <span className="ts-icon is-user-icon"></span> 個人檔案
        </div>
        <div className="">側欄主題三</div>
        <div className="item">
          <span className="ts-icon is-compass-icon"></span> 探索
        </div>
        <div className="item">
          <span className="ts-icon is-film-icon"></span> 訂閱項目
        </div>
        <div className="">側欄主題四</div>
        <div className="item">
          <span className="ts-icon is-compass-icon"></span> 探索
        </div>
        <div className="item">
          <span className="ts-icon is-film-icon"></span> 訂閱項目
        </div>
      </div>
    </div>
  );
};

export default SideNavComponent;
