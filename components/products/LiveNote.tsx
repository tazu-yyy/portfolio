import React from 'react'
import styles from "../../styles/Products.module.scss";

export const LiveNote: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>配信のーと</h3>
        <p>
          ストリーミング配信を定期的にTwitterで宣伝するWEBアプリ。
        </p>
        <p>
          登録すると配信が終わるまで1時間毎に自動で宣伝ツイートをしてくれる。配信終了時は自動でツイートを停止。YouTube、Twitchに対応。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Ruby on Rails</li>
          <li>YouTube Live Streaming API</li>
          <li>Twitch API</li>
          <li>OAuth with the Twitter API</li>
          <li>Materialize</li>
          <li>AWS</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "-1em" }}><a href={"https://livenote.kongaribug.com"}>サイトを見る</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/livenote01.jpg"} className={styles["product-image"]} />
        <img src={"/images/livenote02.jpg"} className={styles["product-image"]} />
      </div>
    </>
  )
}
