import React from 'react'
import styles from "../styles/PostIt.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

interface PostItProps {
  title: string,
  url?: string,
  clickable?: boolean
}

export const PostIt: React.FC<PostItProps> = (props) => {
  return (
    <div className={`${styles["fusen-container"]} ${props.clickable ? styles.clickable : null}`}>
      <div className={styles.fusen}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.content}>
          {props.children}
        </div>
        <div className={`${styles["clickable-container"]} ${props.clickable ? null : styles.none}`}>
          <FontAwesomeIcon icon={faInfoCircle} className={styles["clickable-icon"]} />
        </div>
      </div>
    </div>
  )
}
