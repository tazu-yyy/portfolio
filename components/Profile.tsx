import React, { useState } from 'react'
import Image from "next/image"
import styles from "../styles/Profile.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Profile: React.FC = () => {
  const [rotateFlg, setRotateFlg] = useState<boolean>(false)
  const rotateProfile = () => {
    rotateFlg ? setRotateFlg(false) : setRotateFlg(true)
  }

  return (
    <div className={styles.containers} onClick={rotateProfile}>
      <div className={`${styles.container} ${styles['container-front']} ${rotateFlg ? styles.rotate : ''}`}>
        <div className={styles['image-container']}>
          <Image src={'/images/okoyan_kill_aqua.png'} width={510} height={509} className={styles.image} alt={'自画像'}/>
        </div>
        <div className={styles.description}>
          <div>
            フリーランス エンジニア
          </div>
          <div className={styles.name}>
            たづ
          </div>
          <div className={styles['sns-contents']}>
            <FontAwesomeIcon icon={faTwitter} className={`${styles['twitter-icon']} ${styles['sns-icon']}`}/>
            <span className={styles['sns-username']}>
              <a href={'https://twitter.com/Kongari_Bug'}>
                @Kongari_Bug
              </a>
            </span>
          </div>
          <div className={styles['sns-contents']}>
            <FontAwesomeIcon icon={faGithub} className={styles['sns-icon']}/>
            <span className={styles['sns-username']}>
              <a href={'https://github.com/tazu-yyy'}>
                tazu-yyy
              </a>
            </span>
          </div>
          <div className={styles['sns-contents']}>
            <FontAwesomeIcon icon={faEnvelope} className={styles['sns-icon']}/>
            <span className={styles['sns-username']}>
              kongaribug★gmail.com
            </span>
          </div>
        </div>
        <div className={styles['click-btn']}>
          click
        </div>
      </div>
      <div className={`${styles.container} ${styles['container-back']} ${rotateFlg ? styles.rotate : ''}`}>
        <h4>Main skills</h4>
        <ul>
          <li>Ruby on Rails</li>
          <li>jQuery</li>
          <li>RDBMS</li>
          <li>Linux</li>
          <li>システム運用</li>
          <li>Dockerなどの主要な開発環境、CI</li>
        </ul>
        <h4>Sub skills</h4>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>Angular</li>
          <li>Apache Cordova</li>
          <li>Ionic</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  )
}
