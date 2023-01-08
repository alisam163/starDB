import React, { Component } from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import Menu from './Menu'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Logo />
        <Menu />
      </div>
    )
  }
}
