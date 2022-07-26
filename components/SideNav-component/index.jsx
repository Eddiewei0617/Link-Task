import React from "react";

const SideNavComponent = ({ sideNavshow, setSideNavShow }) => {
  const [burgershow, setBurgerShow] = React.useState(true);

  // 側邊欄箭頭按鈕是否被按
  const handleSideNavShow = () => {
    setSideNavShow(!sideNavshow);
  };
  // 手機版變漢堡時判斷按鈕是否被按
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

      {/* 側邊欄文字部分 */}
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
        <div className="topic">側欄主題四</div>
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
        <div className="topic">側欄主題四</div>
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
