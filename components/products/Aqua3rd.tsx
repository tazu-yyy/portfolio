import React from 'react'
import styles from "../../styles/Products.module.scss";

export const Aqua3rd: React.FC = () => {
  return (
    <>
      <div className={`${styles["product-container-left"]} ${styles["product-container"]}`}>
        <h3>#湊あくあ３年目の軌跡</h3>
        <p>
          ホロライブ2期生、バーチャルアイドルゲーマー猫耳メイドの湊あくあ3周年記念、非公式ファンサイト。
        </p>
        <p>
          3年目にあったコラボ、企画、グッズ販売などを時系列順にまとめた振り返る用WEBサイト。
        </p>
        <h5>使用技術</h5>
        <ul>
          <li>Next.js</li>
          <li>Vertical Timeline</li>
          <li>GitHub Pages</li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "3em" }}><a href={"https://www.湊あくあ.moe"}>サイトを見る</a></div>
      </div>
      <div className={`${styles["product-container-right"]} ${styles["product-container"]}`}>
        <img src={"/images/aqua3rd01.jpg"} className={styles["product-image"]} />
        <img src={"/images/aqua3rd02.jpg"} className={styles["product-image"]} />
      </div>
    </>
  )
}
