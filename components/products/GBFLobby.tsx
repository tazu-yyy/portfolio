import React from 'react'
import styles from "../../styles/Products.module.scss";

export const GBFLobby: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>GBF Lobby（サービス終了済み）</h3>
        <p>
          スマホアプリ、グランブルーファンタジーのマルチバトルマッチングサービス。
        </p>
        <p>
          マッチング後のリアルタイムチャットも搭載。機能的には今でもアプリ内機能より優れていると思っている。
        </p>
        <p>
          ゲームに飽きたためサービス終了。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Ruby on Rails</li>
          <li>Action Cable</li>
          <li>AWS</li>
        </ul>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
      </div>
    </>
  )
}
