import React from 'react'
import styles from "../../styles/Products.module.scss";

export const SlackStream: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>SlackStream</h3>
        <p>
          Slackで入室しているチャンネルの発言を1つのタイムラインにまとめて表示するデスクトップアプリ。
        </p>
        <p>
          3人で共同開発。OSS化。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Angular</li>
          <li>Electron</li>
          <li>TypeScript</li>
          <li>Slack API</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "1em" }}><a href={"https://github.com/mazun/SlackStream"}>サイトを見る</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/ss.png"} className={styles["product-image"]} />
      </div>
    </>
  )
}
