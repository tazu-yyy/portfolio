import React from 'react'
import styles from "../styles/PostIt.module.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

interface PostItProps {
  title: string,
  url?: string
}

export const PostIt: React.FC<PostItProps> = (props) => {
  return (
    <div className={styles["fusen-container"]}>
      <div className={styles.fusen}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
