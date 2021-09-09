import React, { useState } from 'react'
import styles from "../styles/Profile.module.scss"
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
          <img src={'/images/profile_small.png'} className={styles.image} alt={'自画像'}/>
        </div>
        <div className={styles.description}>
          <div className={styles["occupation"]}>
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
        <h4>Main skills ( 業務年 )</h4>
        <ul className={`${styles['skill-sets']} ${styles['main-skill-sets']}`}>
          <li>
            Ruby on Rails
            <span className={styles['skill-level']}>6</span>
          </li>
          <li>jQuery<span className={styles['skill-level']}>6</span></li>
          <li>システム運用<span className={styles['skill-level']}>5</span></li>
          <li>Docker<span className={styles['skill-level']}>5</span></li>
          <li className={styles['level-none']}>RDBMS</li>
          <li className={styles['level-none']}>Linux</li>
          <li className={styles['level-none']}>AWS</li>
        </ul>
        <h4>Sub skills</h4>
        <ul className={`${styles['skill-sets']} ${styles['sub-skill-sets']}`}>
          <li>Next.js</li>
          <li>React</li>
          <li>Angular</li>
          <li>Apache Cordova</li>
          <li>Ionic</li>
          <li>C</li>
          <li>TypeScript</li>
        </ul>
        <h4>Qualifications</h4>
        <ul className={`${styles['skill-sets']} ${styles['qualifications']}`}>
          <li>IPA ネットワーク, データベース</li>
          <li>AWS SAA</li>
        </ul>
      </div>
    </div>
  )
}
