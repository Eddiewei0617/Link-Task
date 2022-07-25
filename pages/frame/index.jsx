import React from "react";
import Head from "next/head";
import BookmarkComponent from "../../components/Bookmark-component";
import ButtonComponent from "../../components/Button-component";
import ContentComponent from "../../components/Content-component";
import HeaderComponent from "../../components/Header-component";
import SideNavComponent from "../../components/SideNav-component";

function Frame() {
  const [sideNavshow, setSideNavShow] = React.useState(true);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <title>後臺系統框架</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.0.4/tocas.min.js"
          async
        ></script>
      </Head>

      <div className="ts-box">
        {/* HEADER */}
        <div className="cell bookmarkBackground">
          <HeaderComponent></HeaderComponent>
        </div>

        {/* 內容 */}
        <div className="ts-grid is-relaxed " style={{ margin: "56px 0px" }}>
          <div className="cell column is-3-wide ts-app-sidebar">
            <SideNavComponent
              sideNavshow={sideNavshow}
              setSideNavShow={setSideNavShow}
            ></SideNavComponent>
          </div>
          <div
            className={`cell is-vertical column is-12-wide ${
              !sideNavshow && "contentBlock"
            } `}
          >
            <div className="cell bookMarkFrame">
              <BookmarkComponent></BookmarkComponent>
            </div>
            <div className="cell">
              <ContentComponent></ContentComponent>
            </div>
            <div className="cell ">
              <ButtonComponent></ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame;
