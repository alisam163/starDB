import React, { Component } from 'react'
import styles from './Logo.module.css'

export default class Logo extends Component {
  render() {
    return (
      <>
        <a href="/" className={styles.logo}>
          <div className={styles.logo}>Logo</div>
        </a>
      </>
    )
  }
}
