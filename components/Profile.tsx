import React from 'react'
import Image from "next/image"
import styles from "../styles/Profile.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Profile: React.FC = () => (
  <div className={styles.container}>

    <div className={styles.image}>
      <Image src={'/images/okoyan_kill_aqua.png'} width={510} height={509}/>
    </div>

    <div className={styles.description}>
      <div>
        フリーランス エンジニア
      </div>
      <div className={styles.name}>
        たづ
      </div>
      <div className={styles['sns-contents']}>
        <FontAwesomeIcon icon={faTwitter} className={`${styles['twitter-icon']} ${styles['sns-icon']}`} />
        <span className={styles['sns-username']}>
          <a href={'https://twitter.com/Kongari_Bug'}>
            @Kongari_Bug
          </a>
        </span>
      </div>
      <div className={styles['sns-contents']}>
        <FontAwesomeIcon icon={faGithub} className={styles['sns-icon']} />
        <span className={styles['sns-username']}>
          <a href={'https://github.com/tazu-yyy'}>
            tazu-yyy
          </a>
        </span>
      </div>
      <div className={styles['sns-contents']}>
        <FontAwesomeIcon icon={faEnvelope} className={styles['sns-icon']} />
        <span className={styles['sns-username']}>
          kongaribug★gmail.com
        </span>
      </div>
    </div>
  </div>
)
