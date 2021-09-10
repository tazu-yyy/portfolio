import React from 'react'
import styles from "../../styles/Products.module.scss";

export const Minaidom: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>Minaidom</h3>
        <p>
          配信サイト、Mildomのコメント欄の表示/非表示を切り替えるブラウザ拡張。
        </p>
        <p>
          Chrome、Firefoxに対応。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>JavaScript</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "3em" }}><a href={"https://chrome.google.com/webstore/detail/minaidom/nnpmjgmkedbadfiafeaicmnojepjgmcn?hl=ja"}>Chrome</a></div>
        <div style={{ textAlign: "center", marginTop: "3em" }}><a href={"https://addons.mozilla.org/ja/firefox/addon/minaidom"}>Firefox</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/minaidom.png"} className={styles["product-image"]} />
      </div>
    </>
  )
}
