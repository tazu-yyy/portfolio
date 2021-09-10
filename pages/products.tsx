import styles from '../styles/Products.module.scss'
import { CommonHead } from "../components/CommonHead";
import { motion } from "framer-motion"
import Link from 'next/link';
import React, { useState } from "react";
import { Aqua3rd } from "../components/products/Aqua3rd";
import { Minaidom } from "../components/products/Minaidom";
import { LiveNote } from "../components/products/LiveNote";
import { GyaZone } from "../components/products/GyaZone";
import { SlackStream } from "../components/products/SlackStream";
import { Yuyuyui } from "../components/products/Yuyuyui";
import { GBFLobby } from "../components/products/GBFLobby";

export default function Products() {
  const [product, setProduct] = useState("aqua3rd")

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
            <div className={`${styles["fusen-container"]} ${styles["first-fusen-container"]} ${product === "aqua3rd" ? styles.active : null}`} onClick={() => setProduct("aqua3rd")}>
              <div className={`${styles["title-fusen"]} ${styles.fusen} ${styles["first-fusen"]}`}>湊あくあ3年目の軌跡</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["second-fusen-container"]} ${product === "minaidom" ? styles.active : null}`} onClick={() => setProduct("minaidom")}>
              <div className={`${styles["title-fusen"]} ${styles["second-fusen"]} ${styles.fusen}`}>Minaidom</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["third-fusen-container"]} ${product === "livenote" ? styles.active : null}`} onClick={() => setProduct("livenote")}>
              <div className={`${styles["title-fusen"]} ${styles["third-fusen"]} ${styles.fusen}`}>配信のーと</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["forth-fusen-container"]} ${product === "gyazone" ? styles.active : null}`} onClick={() => setProduct("gyazone")}>
              <div className={`${styles["title-fusen"]} ${styles["forth-fusen"]} ${styles.fusen}`}>GyaZone</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["fifth-fusen-container"]} ${product === "ss" ? styles.active : null}`} onClick={() => setProduct("ss")}>
              <div className={`${styles["title-fusen"]} ${styles["fifth-fusen"]} ${styles.fusen}`}>SlackStream</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["sixth-fusen-container"]} ${product === "yuyuyui" ? styles.active : null}`} onClick={() => setProduct("yuyuyui")}>
              <div className={`${styles["title-fusen"]} ${styles["sixth-fusen"]} ${styles.fusen}`}>ゆゆゆい勇者図鑑</div>
            </div>
            <div className={`${styles["fusen-container"]} ${styles["seventh-fusen-container"]} ${product === "gbflobby" ? styles.active : null}`} onClick={() => setProduct("gbflobby")}>
              <div className={`${styles["title-fusen"]} ${styles["seventh-fusen"]} ${styles.fusen}`}>GBF Lobby</div>
            </div>
            <Link href={"/"}>
              <a>
                <div className={`${styles["fusen-container"]} ${styles["back-fusen-container"]}`} style={{ top: "-20px" }}>
                  <div className={`${styles["title-fusen"]} ${styles["back-fusen"]} ${styles.fusen}`}>戻る</div>
                </div>
              </a>
            </Link>
            <img src={"/images/notebook2.png"} className={styles.notebook}/>
            {
              (() => {
                if(product === "aqua3rd") {
                  return (<Aqua3rd />)
                } else if (product === "minaidom") {
                  return (<Minaidom />)
                } else if (product === "livenote") {
                  return (<LiveNote />)
                } else if (product === "gyazone") {
                  return (<GyaZone />)
                } else if (product === "ss") {
                  return (<SlackStream />)
                } else if (product === "yuyuyui") {
                  return (<Yuyuyui />)
                } else if (product === "gbflobby") {
                  return (<GBFLobby />)
                }
              })()
            }
          </div>
        </main>
      </motion.div>
    </div>
  )
}
