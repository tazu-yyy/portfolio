import styles from '../styles/Hobby.module.scss'
import { CommonHead } from "../components/CommonHead";
import Link from 'next/link';
import { motion } from "framer-motion"
import { PostIt } from "../components/PostIt";
import React, { useState } from "react";
import Modal from "react-modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement("body");
export default function Hobby() {
  const [suimusouModal, setSuimusouModal] = useState(false)
  const [tensokuModal, setTensokuModal] = useState(false)
  const [gbvsModal, setGbvsModal] = useState(false)
  const [etcModal, setEtcModal] = useState(false)

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: "-200%" }}
        animate={{ x: "0" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <CommonHead />
        <main className={styles.main}>
          <div className={styles.contents}>
            <div className={styles["fusen-container"]}>
              <div className={`${styles["title-fusen"]} ${styles.fusen}`}>対戦ゲーム</div>
            </div>
            <div style={{ width: "100%" }}></div>
            <div onClick={() => setSuimusouModal(true)}>
              <PostIt title={"東方萃夢想"} clickable={true}>
                2006年～2009年<br />
                人生で一番やりこんで留年した。
                レミリア、パチュリー1位クラス<br/>
                <img src={"/images/th075.jpg"} className={styles["postit-image"]} style={{ width: "100px" }} />
              </PostIt>
            </div>
            <Modal isOpen={suimusouModal}
                   onRequestClose={() => setSuimusouModal(false)}
                   overlayClassName={{ base: styles["modal-overlay-base"], afterOpen: styles["modal-overlay-after"], beforeClose: styles["modal-overlay-before"] }}
                   className={{ base: styles["modal-content-base"], afterOpen: styles["modal-content-after"], beforeClose: styles["modal-content-before"] }}
                   closeTimeoutMS={250}>
              <div className={styles["is-style-whiteboard1"]}>
                <div className={styles["wp-block-group__inner-container"]}>
                  <div className={styles.movies}>
                    <div>
                      <h4>第3回東劇 <span className={styles["rank"]}>準優勝</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm3496528" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm3496528">第3回東劇 決勝トーナメント決勝戦 Z２</a></iframe>
                    </div>
                    <div>
                      <h4>第三回弾幕アクション関西大会 <span className={styles["rank"]}>優勝</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm5361526" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm5361526">東方萃夢想 決勝トナメ最終戦 紙ゴッデスｖｓこだわりナイトたづ</a></iframe>
                    </div>
                    <div>
                      <h4>第五回弾幕アクション関西大会 <span className={styles["rank"]}>優勝</span></h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://www.youtube.com/watch?v=guciy565yok"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/guciy565yok/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4>第六回弾幕アクション関西大会 <span className={styles["rank"]}>3位</span></h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://www.youtube.com/watch?v=8R9Ovo4Zk98"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/8R9Ovo4Zk98/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4>最終関西東方萃夢想大会 <span className={styles["rank"]}>優勝</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm1494339" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm1494339">最終関西東方萃夢想大会-決勝戦-紫(TRECK無双)VSレミリア(たづ)</a></iframe>
                    </div>
                    <div>
                      <h4>関西大会EX <span className={styles["rank"]}>5位</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm2944916" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm2944916">東方萃夢想 関西大会EX 決勝トーナメント2回戦 たづ vs 紙G</a></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["close-btn"]}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setSuimusouModal(false)} className={styles["close-icon"]} />
              </div>
            </Modal>
            <div onClick={() => setTensokuModal(true)}>
              <PostIt title={"東方非想天則"} clickable={true}>
                2009年～2010年<br />
                萃夢想の知識でスタダした。<br />初期verチルノ多分1位<br />
                <img src={"/images/th123.jpg"} className={styles["postit-image"]} />
              </PostIt>
            </div>
            <Modal isOpen={tensokuModal}
                   onRequestClose={() => setTensokuModal(false)}
                   overlayClassName={{ base: styles["modal-overlay-base"], afterOpen: styles["modal-overlay-after"], beforeClose: styles["modal-overlay-before"] }}
                   className={{ base: styles["modal-content-base"], afterOpen: styles["modal-content-after"], beforeClose: styles["modal-content-before"] }}
                   closeTimeoutMS={250}>
              <div className={styles["is-style-whiteboard1"]}>
                <div className={styles["wp-block-group__inner-container"]}>
                  <div className={styles.movies}>
                    <div>
                      <h4>第拾捌回東方緋闘劇 <span className={styles["rank"]}>優勝</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm8760563" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm8760563">第拾捌回東方緋闘劇 3位決定戦・決勝戦</a></iframe>
                    </div>
                    <div>
                      <h4>2月17日 東方非想天則ランキングバトル <span className={styles["rank"]}>4位</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm9753339" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm9753339">2月17日 東方非想天則ランキングバトル 3位決定戦・決勝戦</a></iframe>
                    </div>
                    <div>
                      <h4>3月3日 東方非想天則ランキングバトル <span className={styles["rank"]}>優勝</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm9906927" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm9906927">3月3日 東方非想天則ランキングバトル 3位決定戦・決勝戦</a></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["close-btn"]}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setTensokuModal(false)} className={styles["close-icon"]} />
              </div>
            </Modal>
            <PostIt title={"エルソード"}>
              2010年～2013年<br />
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
            <div onClick={() => setGbvsModal(true)}>
              <PostIt title={"グラブルVS"} clickable={true}>
                2020年2月～2020年8月<br />
                短いけどかなりやり込んだ。Master20位代が最高。
                <img src={"/images/gbvs.png"} className={styles["postit-image"]} />
              </PostIt>
            </div>
            <Modal isOpen={gbvsModal}
                   onRequestClose={() => setGbvsModal(false)}
                   overlayClassName={{ base: styles["modal-overlay-base"], afterOpen: styles["modal-overlay-after"], beforeClose: styles["modal-overlay-before"] }}
                   className={{ base: styles["modal-content-base"], afterOpen: styles["modal-content-after"], beforeClose: styles["modal-content-before"] }}
                   closeTimeoutMS={250}>
              <div className={styles["is-style-whiteboard1"]}>
                <div className={styles["wp-block-group__inner-container"]}>
                  <div className={styles.movies}>
                    <div>
                      <h4><a href={"https://kakuge-checker.com/topic/view/06918/"} target={"_blank"} rel="noopener noreferrer">GRANBLUE FANTASY Versus UNITY 3on3 vol.2 <span className={styles["rank"]}>3位</span></a></h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://youtu.be/V0XMcKSaHC4?t=3831"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/V0XMcKSaHC4/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4><a href={"https://kakuge-checker.com/topic/view/06915/"} target={"_blank"} rel="noopener noreferrer">RAGE GBVS 2020 Summer <span className={styles["rank"]}>33位</span></a></h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://www.youtube.com/watch?v=Pe4nIPSktlw"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/Pe4nIPSktlw/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4>東方勢vsギルティ勢 10対10対抗戦</h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://www.youtube.com/watch?v=BmB7lq7f26I"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/BmB7lq7f26I/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4>東方勢vsKoF勢 10対10対抗戦</h4>
                      <div className={styles["youtube-container"]}>
                        <a href={"https://www.youtube.com/watch?v=JI9NxudMxlE"} target={"_blank"} rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faYoutube} className={styles["youtube-icon"]} />
                          <div className={styles["youtube-image"]}>
                            <img className={styles["youtube-image"]} src={"http://img.youtube.com/vi/JI9NxudMxlE/mqdefault.jpg"} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["close-btn"]}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setGbvsModal(false)} className={styles["close-icon"]} />
              </div>
            </Modal>
            <PostIt title={"Apex"}>
              2020年8月～2021年1月<br />
              初FPS。短いけどこの期間はかなりやり込んだ。ダイヤ4でやめた
            </PostIt>
            <div onClick={() => setEtcModal(true)}>
              <PostIt title={"その他いろいろ"} clickable={true}>
                1000戦ぐらいでやめたやつ<br/>
                BLAZBLUE、アルカナハート、GGXrd、東方深秘録、電撃FC
              </PostIt>
            </div>
            <Modal isOpen={etcModal}
                   onRequestClose={() => setEtcModal(false)}
                   overlayClassName={{ base: styles["modal-overlay-base"], afterOpen: styles["modal-overlay-after"], beforeClose: styles["modal-overlay-before"] }}
                   className={{ base: styles["modal-content-base"], afterOpen: styles["modal-content-after"], beforeClose: styles["modal-content-before"] }}
                   closeTimeoutMS={250}>
              <div className={styles["is-style-whiteboard1"]}>
                <div className={styles["wp-block-group__inner-container"]}>
                  <div className={styles.movies}>
                    <div>
                      <h4>第九回東方非萃劇 <span className={styles["rank"]}>2位</span></h4>
                      <iframe src="https://ext.nicovideo.jp/thumb/sm26405232" scrolling="yes"
                              style={{ border: "solid 1px #ccc" }} frameBorder="0"><a
                        href="https://www.nicovideo.jp/watch/sm26405232">第九回東方非萃劇 決勝戦</a></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["close-btn"]}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setEtcModal(false)} className={styles["close-icon"]} />
              </div>
            </Modal>
            <div style={{ width: "100%" }}></div>
            <div className={styles["fusen-container"]}>
              <div className={`${styles["title-fusen"]} ${styles.fusen}`}>その他</div>
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
                  <div className={`${styles["back-fusen"]} ${styles.fusen}`}>戻る</div>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  )
}
