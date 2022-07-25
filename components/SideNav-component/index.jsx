import React from "react";

const SideNavComponent = ({ sideNavshow, setSideNavShow }) => {
  // const [sideNavshow, setSideNavShow] = React.useState(true);
  const [burgershow, setBurgerShow] = React.useState(true);
  const handleSideNavShow = () => {
    setSideNavShow(!sideNavshow);
  };
  const handleBurgerShow = () => {
    setBurgerShow(!burgershow);
  };

  return (
    <div
      className={`ts-content sideBar ${!sideNavshow && "hideNav"} ${
        !burgershow && "modalShow"
      }`}
    >
      <span
        className={`ts-icon is-angles-left-icon `}
        onClick={() => {
          handleSideNavShow();
        }}
      ></span>
      <div
        className="ts-icon is-bars-icon"
        onClick={() => {
          handleBurgerShow();
        }}
      ></div>

      <div className="sideBarText">
        <div className="topic">側欄主題一</div>
        <div
          className="item"
          onClick={() => {
            handleBurgerShow();
          }}
        >
          <span className="ts-icon is-compass-icon"></span> 探索
        </div>
        <div className="item">
          <span className="ts-icon is-film-icon"></span> 訂閱項目
        </div>
        <div className="topic">側欄主題二</div>
        <div className="item">
          <span className="ts-icon is-user-icon"></span> 個人檔案
        </div>
        <div className="topic">側欄主題三</div>
        <div className="item">
          <span className="ts-icon is-compass-icon"></span> 探索
        </div>
        <div className="item">
          <span className="ts-icon is-film-icon"></span> 訂閱項目
        </div>
        <div className="topic">側欄主題四</div>
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
