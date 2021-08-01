import React from 'react'
import Image from "next/image"
import styles from "../styles/Profile.module.css"

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const Profile: React.FC = () => (
  <div className={styles.container}>
    <Image loader={myLoader} src={'/images/okoyan_kill_aqua.png'} width={100} height={100} />
    <h1 className={styles.title}>
      たづ
    </h1>
  </div>
)
