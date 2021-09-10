import React from 'react'
import styles from "../../styles/Products.module.scss";

export const Yuyuyui: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>ゆゆゆい勇者図鑑（運用終了済み）</h3>
        <p>
          スマホアプリ、結城友奈は勇者である 花結いのきらめきのガチャカード所持率保存ツール。
        </p>
        <p>
          Twitterでの自慢機能も搭載。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Ruby on Rails</li>
          <li>Angular</li>
          <li>AWS</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "1em" }}><a href={"https://yuyuyui.kongaribug.com/"}>サイトを見る</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/yuyuyui.jpg"} className={styles["product-image"]} />
      </div>
    </>
  )
}
