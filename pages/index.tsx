import styles from '../styles/Home.module.scss'
import { Profile } from '../components/Profile'
import Link from 'next/link';
import { CommonHead } from "../components/CommonHead";
import { motion } from "framer-motion"

export default function Home() {
  return (
      <div className={styles.container}>
        <motion.span
          initial={{ x: "-200%" }}
          animate={{ x: "0" }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <CommonHead />
          <main className={styles.main}>
            <div className={`${styles["hobby-container"]} ${styles["menu-container"]}`}>
              <Link href={"/hobby"}>
                <a>
                  趣味
                  <img src={"/images/controller2.png"} className={`${styles["hobby-image"]} ${styles["menu-image"]}`}/>
                </a>
              </Link>
            </div>
            <div className={`${styles["sp-container"]} ${styles["menu-container"]}`}>
              <Link href={"/products"}>
                <a>
                  制作物
                  <img src={"/images/sp.png"} className={`${styles["sp-image"]} ${styles["menu-image"]}`} />
                </a>
              </Link>
            </div>
            <div className={`${styles["book-container"]} ${styles["menu-container"]}`}>
              <a href={"https://kongaribug.hatenablog.com/"}>
                ブログ
                <img src={"/images/book.png"} className={`${styles["book-image"]} ${styles["menu-image"]}`} />
              </a>
            </div>
            <Profile />
          </main>
        </motion.span>
      </div>
  )
}
