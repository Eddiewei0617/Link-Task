import Head from "next/head";
import HeaderComponent from "../../components/Header-component/index.jsx";

function Frame() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.js"
          async
        ></script>
      </Head>

      <div className="ts-box" style={{ height: "2000px" }}>
        <div className="cell">
          <HeaderComponent></HeaderComponent>
        </div>
        <div
          className="ts-grid is-relaxed ts-app-sidebar"
          style={{ marginTop: "80px" }}
        >
          <div className="cell column is-3-wide">
            <div className="ts-content sideBar">
              <div>側邊欄</div>
            </div>
          </div>
          <div className="cell is-fluid is-vertical column is-9-wide">
            <div className="cell">
              <div className="ts-content">頁籤</div>
            </div>
            <div className="cell">
              <div className="ts-content">內容欄</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame;
