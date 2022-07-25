import Link from "next/link";
import React from "react";

const ContentComponent = () => {
  return (
    <div className="bigContent ts-wrap is-vertical ">
      {/* 文章(副)標題-一般input */}
      <div className="ts-control">
        <div className="label">文章標題</div>
        <div className="inputFrame">
          <div className="ts-input is-fluid is-underlined">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="ts-control">
        <div className="label">文章副標題</div>
        <div className="inputFrame">
          <div className="ts-input is-fluid is-underlined">
            <input type="password" />
          </div>
        </div>
      </div>

      {/* 文章種類-下拉式選單 */}
      <div className="ts-control">
        <div className="label">文章種類</div>
        <div className="ts-select is-fluid is-underlined inputFrame">
          <select>
            <option>運動</option>
            <option>美食</option>
            <option>購物</option>
          </select>
        </div>
      </div>

      {/* 單選區塊 */}
      <div className="ts-row ts-control">
        <div className=" is-label">文章單選</div>
        <div className="ts-wrap">
          <label className="ts-radio">
            <input name="single" type="radio" />
            單選一
          </label>
          <label className="ts-radio">
            <input name="single" type="radio" />
            單選二
          </label>
          <label className="ts-radio">
            <input name="single" type="radio" />
            單選三
          </label>
        </div>
      </div>

      {/* 多選區塊 */}
      <div className="ts-control">
        <div className="is-label">文章多選</div>
        <div className="ts-wrap">
          <label className="ts-checkbox">
            <input type="checkbox" />
            多選一
          </label>
          <label className="ts-checkbox">
            <input type="checkbox" />
            多選二
          </label>
          <label className="ts-checkbox">
            <input type="checkbox" />
            多選三
          </label>
          <label className="ts-checkbox">
            <input type="checkbox" />
            多選四
          </label>
        </div>
      </div>

      <div className="ts-control ts-row switchArea">
        <div className="is-label">設定文章密碼</div>
        <label className="ts-switch">
          <input type="checkbox" />
        </label>
        <div className="ts-input is-small is-underlined switchInput inputFrame">
          <input className="ts-input" type="text" />
        </div>
      </div>

      {/* 可調整式input */}
      <div className="ts-control">
        <div className="is-label">輸入內文</div>
        <div className="ts-input is-resizable is-underlined inputFrame">
          <textarea className="textarea" placeholder="請輸入內文…"></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
