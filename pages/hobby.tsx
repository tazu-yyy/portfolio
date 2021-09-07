import styles from '../styles/Hobby.module.scss'
import { CommonHead } from "../components/CommonHead";
import Link from 'next/link';
import { motion } from "framer-motion"
import { PostIt } from "../components/PostIt";

export default function Hobby() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: "-200%" }}
        animate={{ x: "0" }}
        exit={{ x: "200%" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <CommonHead />
        <main className={styles.main}>
          <div className={styles.contents}>
            <div className={styles["fusen-container"]}>
              <div className={styles["title-fusen"]}>対戦ゲーム</div>
            </div>
            <div style={{ width: "100%" }}></div>
            <PostIt title={"東方萃夢想"}>
              2006年～2009年<br />
              人生で一番やりこんで留年した。
              レミリア、パチュリー1位クラス<br/>
              <img src={"/images/th075.jpg"} className={styles["postit-image"]} style={{ width: "100px" }} />
            </PostIt>
            <PostIt title={"東方非想天則"}>
              2009年～2010年<br />
              萃夢想の知識でスタダした。<br />初期verチルノ1位<br />
              <img src={"/images/th123.jpg"} className={styles["postit-image"]} />
            </PostIt>
            <PostIt title={"エルソード"}>
              2010年～2011年<br />
              初めてMOネトゲにハマった。対人最高ランクタッチまではやった。<br />
              無名選手
              <img src={"/images/elsword.png"} className={styles["postit-image"]} />
            </PostIt>
            <PostIt title={"東方蟒酒宴"} url={"http://neetpia.sakura.ne.jp/works/TouhouBoushuen/index.html"}>
              2011年～2012年<br />
              トップ10入りはしてたはず。自分には政治力が足りないと思った。
              <img src={"/images/shuen.jpg"} className={styles["postit-image"]} style={{ width: "100px" }} />
            </PostIt>
            <PostIt title={"UNDER NIGHT IN-BIRTH"}>
              2014年～2015年, 2017年～2018年<br />
              格ゲーらしい格ゲーを初めてやりこんだ。無名選手<br />
              <img src={"/images/uni.png"} className={styles["postit-image"]} />
            </PostIt>
            <PostIt title={"LoL"}>
              2016年～2018年<br />
              身内ノーマルをだらだらと。一応キンドレッドとポッピーメイン。アサシンが苦手。期間が長いので対戦数だけは多い。
            </PostIt>
            <PostIt title={"ドラゴンボールファイターズ"}>
              2018年～2019年<br />
              格ゲーらしい格ゲーで一番おもしろかった。無名選手<br />
              <img src={"/images/dbfz.png"} className={styles["postit-image"]} style={{ width: "100px" }} />
            </PostIt>
            <PostIt title={"グラブルVS"}>
              2020年2月～2020年8月<br />
              短いけどかなりやり込んだ。Master20位代が最高。
              <img src={"/images/gbvs.png"} className={styles["postit-image"]} />
            </PostIt>
            <PostIt title={"Apex"}>
              2020年8月～2021年1月<br />
              初FPS。短いけどこの期間はかなりやり込んだ。ダイヤ4でやめた
            </PostIt>
            <PostIt title={"その他いろいろ"}>
              1000戦ぐらいでやめたやつ<br/>
              BLAZBLUE、アルカナハート、GGXrd、東方深秘録、電撃FC
            </PostIt>
            <div style={{ width: "100%" }}></div>
            <div className={styles["fusen-container"]}>
              <div className={styles["title-fusen"]}>その他</div>
            </div>
            <div style={{ width: "100%" }}></div>
            <PostIt title={"結城友奈"}>
              2014年～<br />
              かわいい<br/>
              <img src={"/images/yukiyuna.png"} className={styles["postit-image"]} style={{ width: "120px" }} />
            </PostIt>
            <PostIt title={"湊あくあ"}>
              2020年～<br />
              かわいい<br/>
              <img src={"/images/minatoaqua3.png"} className={styles["postit-image"]} />
            </PostIt>
            <div style={{ width: "100%" }}></div>
            <div className={styles["fusen-container"]}>
              <Link href={"/"}>
                <a>
                  <div className={styles["back-fusen"]}>戻る</div>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  )
}
