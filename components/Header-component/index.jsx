import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="ts-row header">
      <div className="column is-middle-aligned">
        <Link href="">
          <a>LOGO</a>
        </Link>
      </div>

      <div className="column ts-app-navbar ts-segment linkIcons">
        <Link href="">
          <a className="item ">
            <div className="ts-icon is-user-icon"></div>
            <div className="label ">使用者</div>
          </a>
        </Link>
        <Link href="">
          <a className="item">
            <div className="ts-icon is-house-icon"></div>
            <div className="label">首頁</div>
          </a>
        </Link>
        <Link href="">
          <a className="item is-active">
            <div className="ts-icon is-newspaper-icon"></div>
            <div className="label">新聞</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
