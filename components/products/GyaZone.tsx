import React from 'react'
import styles from "../../styles/Products.module.scss";

export const GyaZone: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>GyaZone</h3>
        <p>
          Gyazoで取得したスクリーンショットのURLを保存するサービス。
        </p>
        <p>
          有料版Gyazoの機能と微妙に被っている部分があるので良いのかわからなかったがGyazo公式Twitterがいいねをくれたので多分セーフ。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Ruby on Rails</li>
          <li>Gyazo API</li>
          <li>OAuth with the Twitter API</li>
          <li>AWS</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "1em" }}><a href={"https://gyazone.kongaribug.com"}>サイトを見る</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/gyazone01.jpg"} className={styles["product-image"]} />
        <img src={"/images/gyazone02.jpg"} className={styles["product-image"]} />
      </div>
    </>
  )
}
